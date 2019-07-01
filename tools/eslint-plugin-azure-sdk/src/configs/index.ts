/**
 * @fileoverview Definition of configs
 * @author Arpan Laha
 */

export = {
  recommended: {
    plugins: ["@ts-common/azure-sdk"],
    env: {
      node: true
    },
    parser: "@typescript-eslint/parser",
    rules: {
      "@ts-common/azure-sdk/github-source-headers": "error",
      "@ts-common/azure-sdk/ts-config-allowsyntheticdefaultimports": "error",
      "@ts-common/azure-sdk/ts-config-declaration": "error",
      "@ts-common/azure-sdk/ts-config-esmoduleinterop": "error",
      "@ts-common/azure-sdk/ts-config-exclude": "error",
      "@ts-common/azure-sdk/ts-config-forceconsistentcasinginfilenames":
        "error",
      "@ts-common/azure-sdk/ts-config-importhelpers": "error",
      "@ts-common/azure-sdk/ts-config-isolatedmodules": "warn",
      "@ts-common/azure-sdk/ts-config-lib": "error",
      "@ts-common/azure-sdk/ts-config-module": "error",
      "@ts-common/azure-sdk/ts-config-moduleresolution": "error",
      "@ts-common/azure-sdk/ts-config-no-experimentaldecorators": "error",
      "@ts-common/azure-sdk/ts-config-sourcemap": "error",
      "@ts-common/azure-sdk/ts-config-strict": "error",
      "@ts-common/azure-sdk/ts-config-target": "error",
      "@ts-common/azure-sdk/ts-error-handling": "off",
      "@ts-common/azure-sdk/ts-modules-only-named": "error",
      "@ts-common/azure-sdk/ts-package-json-author": "error",
      "@ts-common/azure-sdk/ts-package-json-bugs": "error",
      "@ts-common/azure-sdk/ts-package-json-engine-is-present": "error",
      "@ts-common/azure-sdk/ts-package-json-files-required": "error",
      "@ts-common/azure-sdk/ts-package-json-homepage": "error",
      "@ts-common/azure-sdk/ts-package-json-keywords": "error",
      "@ts-common/azure-sdk/ts-package-json-license": "error",
      "@ts-common/azure-sdk/ts-package-json-main-is-cjs": "error",
      "@ts-common/azure-sdk/ts-package-json-module": "error",
      "@ts-common/azure-sdk/ts-package-json-name": "error",
      "@ts-common/azure-sdk/ts-package-json-repo": "error",
      "@ts-common/azure-sdk/ts-package-json-required-scripts": "error",
      "@ts-common/azure-sdk/ts-package-json-sideeffects": "error",
      "@ts-common/azure-sdk/ts-package-json-types": "error",
      "@ts-common/azure-sdk/ts-use-interface-parameters": "warn",
      "@ts-common/azure-sdk/ts-versioning-semver": "error"
    },
    settings: {
      main: "src/index.ts"
    }
  }
};
