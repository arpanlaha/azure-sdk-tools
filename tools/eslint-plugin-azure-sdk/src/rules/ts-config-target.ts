/**
 * @fileoverview Rule to force tsconfig.json's compilerOptions.target value to be a valid EcmaScript standard.
 * @author Arpan Laha
 */

import { getVerifiers, stripPath } from "../utils/verifiers";
import { Rule } from "eslint";
import { Literal, Property } from "estree";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export = {
  meta: {
    type: "problem",

    docs: {
      description:
        "force tsconfig.json's compilerOptions.target value to be a valid EcmaScript standard",
      category: "Best Practices",
      recommended: true,
      url:
        "https://azuresdkspecs.z5.web.core.windows.net/TypeScriptSpec.html#ts-config-target"
    },
    schema: [] // no options
  },
  create: (context: Rule.RuleContext): Rule.RuleListener => {
    const verifiers = getVerifiers(context, {
      outer: "compilerOptions",
      inner: "target"
    });
    return stripPath(context.getFilename()) === "tsconfig.json"
      ? ({
          // callback functions

          // check to see if compilerOptions exists at the outermost level
          "ExpressionStatement > ObjectExpression": verifiers.existsInFile,

          // check that target is a member of compilerOptions
          "ExpressionStatement > ObjectExpression > Property[key.value='compilerOptions']":
            verifiers.isMemberOf,

          // check the node corresponding to compilerOptions.target to see if it is set to true
          "ExpressionStatement > ObjectExpression > Property[key.value='compilerOptions'] > ObjectExpression > Property[key.value='target']": (
            node: Property
          ): void => {
            // check that the value of target is a literal
            if (node.value.type !== "Literal") {
              context.report({
                node: node.value,
                message: "compilerOptions.target is not set to a string"
              });
              return;
            }

            const nodeValue: Literal = node.value as Literal;

            // check that target is not set to an invalid EcmaScript standard (ES3 or ESNext)
            /es3/i.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message: "ES3 is not a valid option for compilerOptions.target"
              });

            /esnext/i.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message:
                  "ESNext is not a valid option for compilerOptions.target"
              });
          }
        } as Rule.RuleListener)
      : {};
  }
};
