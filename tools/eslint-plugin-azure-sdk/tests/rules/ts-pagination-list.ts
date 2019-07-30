/**
 * @fileoverview Testing the ts-pagination-list rule.
 * @author Arpan Laha
 */

import rule from "../../src/rules/ts-pagination-list";
import { RuleTester } from "eslint";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  }
});

ruleTester.run("ts-pagination-list", rule, {
  valid: [
    // simple valid example
    {
      code:
        "class ExampleClient { listItems(): PagedAsyncIterableIterator {}; };"
    },
    // not a client
    {
      code: "class Example { listItems(): void {}; };"
    }
  ],
  invalid: [
    // no list method
    {
      code: "class ExampleClient { };",
      errors: [
        {
          message: "ExampleClient does not have a list method"
        }
      ]
    },
    // no return type
    {
      code: "class ExampleClient { listItems() {} };",
      errors: [
        {
          message: "ExampleClient's list method does not have a return type"
        }
      ]
    },
    // not a PagedAsyncIterableIterator
    {
      code: "class ExampleClient { listItems(): PagedIterableIterator {} };",
      errors: [
        {
          message:
            "ExampleClient's list method does not return a PagedAsyncIterableIterator"
        }
      ]
    }
  ]
});
