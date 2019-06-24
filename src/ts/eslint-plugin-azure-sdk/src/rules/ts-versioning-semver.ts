/**
 * @fileoverview Rule to force the package major version not to be zero.
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
      description: "force the package major version not to be zero",
      category: "Best Practices",
      recommended: true,
      url:
        "https://azuresdkspecs.z5.web.core.windows.net/TypeScriptSpec.html#ts-versioning-no-version-0"
    },
    schema: [] // no options
  },
  create: (context: Rule.RuleContext): Rule.RuleListener => {
    const verifiers = getVerifiers(context, {
      outer: "version"
    });
    return stripPath(context.getFilename()) === "package.json"
      ? ({
          // callback functions

          // check to see if version exists at the outermost level
          "ExpressionStatement > ObjectExpression": verifiers.existsInFile,

          // check the node corresponding to types to see if its value is a TypeScript declaration file
          "ExpressionStatement > ObjectExpression > Property[key.value='version']": (
            node: Property
          ): void => {
            node.value.type !== "Literal" &&
              context.report({
                node: node.value,
                message: "version is not set to a string"
              });
            const nodeValue: Literal = node.value as Literal;

            const semverPattern = /^(\d+\.){2}\d/;
            !semverPattern.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message: "version is not in semver"
              });

            const previewPattern = /^(\d+\.){2}\d(-preview-\d+)?$/;
            semverPattern.test(nodeValue.value as string) &&
              !previewPattern.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message: "preview format is not x.y.z-preview-i"
              });

            const major0Pattern = /^0\./; // version starting in '0.'
            semverPattern.test(nodeValue.value as string) &&
              major0Pattern.test(nodeValue.value as string) &&
              context.report({
                node: nodeValue,
                message: "major version should not be set to 0"
              });
          }
        } as Rule.RuleListener)
      : {};
  }
};
