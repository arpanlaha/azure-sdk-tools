/**
 * @fileoverview Rule to force module to be the ES6 entrypoint to the application.
 * @author Arpan Laha
 */

import { getVerifiers, stripPath } from "../utils";
import { Rule } from "eslint";
import { Literal, Property } from "estree";
import { getRuleMetaData } from "../utils";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export = {
  meta: getRuleMetaData(
    "ts-package-json-module",
    "force package.json's module value to be the ES6 entrypoint to the application"
  ),
  create: (context: Rule.RuleContext): Rule.RuleListener => {
    const verifiers = getVerifiers(context, {
      outer: "module"
    });
    return stripPath(context.getFilename()) === "package.json"
      ? ({
          // callback functions

          // check to see if module exists at the outermost level
          "ExpressionStatement > ObjectExpression": verifiers.existsInFile,

          // check the node corresponding to module to see if its value is dist-esm/src/index.js
          "ExpressionStatement > ObjectExpression > Property[key.value='module']": (
            node: Property
          ): void => {
            if (node.value.type !== "Literal") {
              context.report({
                node: node.value,
                message: "name is not a Literal"
              });
            }

            const nodeValue: Literal = node.value as Literal;

            const regex = /^(\.\/)?dist-esm\/src\/index\.js$/;

            !regex.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message:
                  "module is set to {{ identifier }} when it should be set to dist-esm/src/index.js",
                data: {
                  identifier: nodeValue.value as string
                }
              });
          }
        } as Rule.RuleListener)
      : {};
  }
};
