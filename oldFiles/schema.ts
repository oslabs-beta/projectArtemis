import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
import artemisQuery from "./artemis.ts"

const types = gql`
type Launch {
        flight_number: Int
        mission_name: String 
        launch_year: String 
        launch_date_local: String 
        launch_success: Boolean 
        rocket: Rocket
},
type Rocket {
        rocket_id: String
        rocket_name: String 
        rocket_type: String 
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

export { types, resolvers }