//Testing:
let responseTime
const start = Date.now()
responseTime = Date.now() - start

const artemisQuery = (url: any, obj: any = null) => {
  /* 
  An Artemis Query takes in two parameters: a URL for the API you're retrieving 
  data from and an optional object, which is used to retrieve a single piece of
  data. The provided object must match the structure that id's are provided to
  resolvers: { variableName }
  */

  const opts = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
  }
  // Sets options for fetch request.
  
  return fetch(url, opts).then(res => res.json()).then(data => {
    
    if (obj) {
      const queryParameter = Object.keys(obj)[0] 
      return data.find((el: any) => el[queryParameter] === obj[queryParameter])
      /*
      If an object is provided as a parameter, that lets the query function know
      that the client is searching for a single piece of data and triggers this
      part of the function. Due to the way the Oak-GraphQL Playground is setup, it
      requires both the label (first queryParameter) and value (second queryParameter)
      of the variable. Find matches the label in the returned data array with the
      value requested.
      */
    }
    else {
      return data
      /*
      Otherwise, by default, artemisQuery returns a full array of data which can
      be further filtered by the client.
      */
    }
  })
} 
    
export default artemisQuery