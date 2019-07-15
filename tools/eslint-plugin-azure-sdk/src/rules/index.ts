/**
 * @fileoverview All rules
 * @author Arpan Laha
 */

import githubSourceHeaders from "./github-source-headers";
import tsConfigAllowSyntheticDefaultImports from "./ts-config-allowsyntheticdefaultimports";
import tsConfigDeclaration from "./ts-config-declaration";
import tsConfigEsModuleInterop from "./ts-config-esmoduleinterop";
import tsConfigExclude from "./ts-config-exclude";
import tsConfigForceConsistentCasingInFileNames from "./ts-config-forceconsistentcasinginfilenames";
import tsConfigImportHelpers from "./ts-config-importhelpers";
import tsConfigIsolatedModules from "./ts-config-isolatedmodules";
import tsConfigLib from "./ts-config-lib";
import tsConfigModule from "./ts-config-module";
import tsConfigModuleResolution from "./ts-config-moduleresolution";
import tsConfigNoExperimentalDecorators from "./ts-config-no-experimentaldecorators";
import tsConfigSourceMap from "./ts-config-sourcemap";
import tsConfigStrict from "./ts-config-strict";
import tsConfigTarget from "./ts-config-target";
import tsDocExternal from "./ts-doc-external";
import tsDocInternal from "./ts-doc-internal";
import tsErrorHandling from "./ts-error-handling";
import tsModulesOnlyNamed from "./ts-modules-only-named";
import tsNoConstEnums from "./ts-no-const-enums";
import tsPackageJsonAuthor from "./ts-package-json-author";
import tsPackageJsonBugs from "./ts-package-json-bugs";
import tsPackageJsonEngineIsPresent from "./ts-package-json-engine-is-present";
import tsPackageJsonFilesRequired from "./ts-package-json-files-required";
import tsPackageJsonHomepage from "./ts-package-json-homepage";
import tsPackageJsonKeywords from "./ts-package-json-keywords";
import tsPackageJsonLicense from "./ts-package-json-license";
import tsPackageJsonMainIsCjs from "./ts-package-json-main-is-cjs";
import tsPackageJsonModule from "./ts-package-json-module";
import tsPackageJsonName from "./ts-package-json-name";
import tsPackageJsonRepo from "./ts-package-json-repo";
import tsPackageJsonRequiredScripts from "./ts-package-json-required-scripts";
import tsPackageJsonSideEffects from "./ts-package-json-sideeffects";
import tsPackageJsonTypes from "./ts-package-json-types";
import tsUseInterfaceParameters from "./ts-use-interface-parameters";
import tsUsePromises from "./ts-use-promises";
import tsVersioningSemver from "./ts-versioning-semver";

export = {
  "github-source-headers": githubSourceHeaders,
  "ts-config-allowsyntheticdefaultimports": tsConfigAllowSyntheticDefaultImports,
  "ts-config-declaration": tsConfigDeclaration,
  "ts-config-esmoduleinterop": tsConfigEsModuleInterop,
  "ts-config-exclude": tsConfigExclude,
  "ts-config-forceconsistentcasinginfilenames": tsConfigForceConsistentCasingInFileNames,
  "ts-config-importhelpers": tsConfigImportHelpers,
  "ts-config-isolatedmodules": tsConfigIsolatedModules,
  "ts-config-lib": tsConfigLib,
  "ts-config-module": tsConfigModule,
  "ts-config-moduleresolution": tsConfigModuleResolution,
  "ts-config-no-experimentaldecorators": tsConfigNoExperimentalDecorators,
  "ts-config-sourcemap": tsConfigSourceMap,
  "ts-config-strict": tsConfigStrict,
  "ts-config-target": tsConfigTarget,
  "ts-doc-external": tsDocExternal,
  "ts-doc-internal": tsDocInternal,
  "ts-error-handling": tsErrorHandling,
  "ts-modules-only-named": tsModulesOnlyNamed,
  "ts-no-const-enums": tsNoConstEnums,
  "ts-package-json-author": tsPackageJsonAuthor,
  "ts-package-json-bugs": tsPackageJsonBugs,
  "ts-package-json-engine-is-present": tsPackageJsonEngineIsPresent,
  "ts-package-json-files-required": tsPackageJsonFilesRequired,
  "ts-package-json-homepage": tsPackageJsonHomepage,
  "ts-package-json-keywords": tsPackageJsonKeywords,
  "ts-package-json-license": tsPackageJsonLicense,
  "ts-package-json-main-is-cjs": tsPackageJsonMainIsCjs,
  "ts-package-json-module": tsPackageJsonModule,
  "ts-package-json-name": tsPackageJsonName,
  "ts-package-json-repo": tsPackageJsonRepo,
  "ts-package-json-required-scripts": tsPackageJsonRequiredScripts,
  "ts-package-json-sideeffects": tsPackageJsonSideEffects,
  "ts-package-json-types": tsPackageJsonTypes,
  "ts-use-interface-parameters": tsUseInterfaceParameters,
  "ts-use-promises": tsUsePromises,
  "ts-versioning-semver": tsVersioningSemver
};
