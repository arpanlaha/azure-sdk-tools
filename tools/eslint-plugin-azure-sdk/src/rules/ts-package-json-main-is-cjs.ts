/**
 * @fileoverview Rule to force main to point to a CommonJS or UMD module.
 * @author Arpan Laha
 */

import { Rule } from "eslint";
import { Literal, Property } from "estree";
import { getRuleMetaData, getVerifiers, stripPath } from "../utils";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export = {
  meta: getRuleMetaData(
    "ts-package-json-main-is-cjs",
    "force package.json's main value to point to a CommonJS or UMD module"
  ),
  create: (context: Rule.RuleContext): Rule.RuleListener => {
    const verifiers = getVerifiers(context, {
      outer: "main"
    });
    return stripPath(context.getFilename()) === "package.json"
      ? ({
          // callback functions

          // check to see if main exists at the outermost level
          "ExpressionStatement > ObjectExpression": verifiers.existsInFile,

          // check the node corresponding to main to see if its value is dist/index.js
          "ExpressionStatement > ObjectExpression > Property[key.value='main']": (
            node: Property
          ): void => {
            if (node.value.type !== "Literal") {
              context.report({
                node: node.value,
                message: "name is not a Literal"
              });
            }

            const nodeValue = node.value as Literal;
            const main = nodeValue.value as string;

            !/^(\.\/)?dist\/index\.js$/.test(main) &&
              context.report({
                node: nodeValue,
                message:
                  "main is set to {{ identifier }} when it should be set to dist/index.js",
                data: {
                  identifier: main
                }
              });
          }
        } as Rule.RuleListener)
      : {};
  }
};
