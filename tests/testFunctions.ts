import artemisQuery from "../functions/artemisQuery.ts"
import calculateMetrics from "../functions/calculateMetrics.ts"

import {
  assertEquals,
  assertNotEquals,
  assertArrayIncludes,
} from "https://deno.land/std@0.78.0/testing/asserts.ts";

//DUMMY DATA FOR TESTS
const url = "https://api.spacex.land/graphql";

const validString = ``

const invalidString = ``

//EXAMPLE TEST
Deno.test("Hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

//ARTEMIS QUERY TESTS
Deno.test("Query should be successful", () => {
  const testResult = artemisQuery(url, validString)
  assertEquals(testResult.successfulQuery, true)
})

Deno.test("Query should not be successful", () => {
  const testResult = artemisQuery(url, validString);
  assertEquals(testResult.successfulQuery, false);
});



//CALCULATE METRICS TESTS
Deno.test("Calculate metrics returns an object with specific properties", () => {
  const testMetrics = calculateMetrics([])
  const testKeys = Object.keys(testMetrics)
  assertArrayIncludes(testKeys, "apis");
  assertArrayIncludes(testKeys, "latencyAvg");
  assertArrayIncludes(testKeys, "latencyMax");
  assertArrayIncludes(testKeys, "sizeAvg");
  assertArrayIncludes(testKeys, "sizeMax");
  assertArrayIncludes(testKeys, "queryTotal");
  assertArrayIncludes(testKeys, "queryFrequency");
  assertArrayIncludes(testKeys, "errorFrequency");
});

Deno.test()