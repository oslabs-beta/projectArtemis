
let responseTime

const artemisQuery = (url: any, obj: any = null) => {
  //An Artemis Query takes in two parameters: a URL for the API you're retrieving 
  //data from and an optional object, which is used to retrieve a single piece of
  //data.

  const opts = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const start = Date.now()
  return fetch(url, opts).then(res => res.json()).then(data => {
    responseTime = Date.now() - start
      console.log("responseTime ", responseTime)
    if (obj) {
      const queryParameter = Object.keys(obj)[0] 
      return data.find((el: any) => el[queryParameter] === obj[queryParameter])
    }
    else {
      return data
    }
      })
} 
    
export default artemisQuery