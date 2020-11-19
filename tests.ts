import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
import artemisQuery from "./artemis.ts"
import { assertEquals, assertNotEquals } from "https://deno.land/std@0.78.0/testing/asserts.ts"

//DUMMY DATA FOR TESTS

const types = gql`
type Launch {
        flight_number: Int
        mission_name: String 
        launch_year: String 
        launch_date_local: String 
        launch_success: Boolean 
},
type Query {
    getLaunch(flight_number: Int): Launch
    getLaunches: [Launch!]!
}`

const resolvers = {
  Query: {
    getLaunch: (parent: any, { flight_number }: any, context: any, info: any) => {
      return artemisQuery("https://api.spacexdata.com/v3/launches", { flight_number })
    },
  
    getLaunches: (parent: any, id: any, context: any, info: any) => {
      return artemisQuery("https://api.spacexdata.com/v3/launches")
    }
  }
}

//EXAMPLE TEST
Deno.test("Hello world", () => {
    const x = 1 + 2
    assertEquals(x, 3)
})

//QUERY TESTS
Deno.test("Single query", () => {
    const data = resolvers.Query.getLaunch(null, { flight_number: 1 }, null, null)
    console.log("Returned data", data)
    assertNotEquals(data, null)
})

