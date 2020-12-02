import artemisQuery from "./functions/artemis.ts"
import addDataSnapshot from "./functions/snapshot"
import clearSnapshots from "./functions/clear"
import syncCacheAndState from "./functions/sync"
import { assertEquals, assertNotEquals } from "https://deno.land/std@0.78.0/testing/asserts.ts"

//DUMMY DATA FOR TESTS
const url = "https://api.spacex.land/graphql"

const query = ` query {
      launch(id: "69") {
        mission_name
        launch_success
        upcoming
        launch_year
        }
      }`

const state = {};

//If you have your cache file stored differently, please update this path
const path = "./artemisCache.json"

//EXAMPLE TEST
Deno.test("Hello world", () => {
    const x = 1 + 2
    assertEquals(x, 3)
})

//QUERY TESTS
Deno.test("Fetch request returns 200 status", () => {
})

Deno.test("Fetch request returns API data", () => {

})

//SYNC CACHE AND STATE TESTS
Deno.test("Adds a JSON file named artemisCache if one does not exist", () => {
  Deno.renameSync("./artemisCache.json", "./tempArtemisCache.json")
  syncCacheAndState(state, path)
  

  const exists = async (filename: string): Promise<boolean> => {
    try {
      await Deno.stat(filename);
      // successful, file or directory must exist
      return true;
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        // file or directory does not exist
        return false;
      } else {
        // unexpected error, maybe permissions, pass it along
        throw error;
      }
    }
  };
  exists("artemisCache.json").then(result => console.log(result)) // => true or false 
  

})

//ADD SNAPSHOT TESTS
Deno.test("Snapshot adds object to JSON file", () => {
  addDataSnapshot({ test: "data" }, state, path)
})

//CLEAR SNAPSHOT TESTS
Deno.test("Snapshot clears object in JSON file", () => {
//Please note this will erase any data you have stored in the cache.
  clearSnapshots(state, path)
})

//METRICS TESTS