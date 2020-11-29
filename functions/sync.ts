const syncCacheAndState = (state: any, path?: string): string => {
    /*
    Reads the artemisCache file for data and saves it to ctx.state as an object labeled Artemis.
    This should be called every time at the beginning of any any functionality to ensure the
    state and cache are aligned and no data is ever lost or overwritten.
    */
    if (!path) {
        path = "./artemisCache.json"
    }
    //Sets a default path if one is not passed as an argument
    try {
        const data = Deno.readTextFileSync(path)
        state.artemis = JSON.parse(data)
        //Parses the data saved in artemisCache and saves it on ctx.state.
        return state.artemis
    }
    catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            Deno.writeTextFileSync(path, JSON.stringify([]));
            state.artemis = [];
            //In any instance that artemisCache doesn't exist (ie the first time a client uses
            //Artemis) an artemisCache json file is created with an empty array inside
            return "JSON file created"
        }
        console.log(err)
        return err.message
    }
}

export default syncCacheAndState
  /*
    Reads the artemisCache file for data and saves it to ctx.state as an object labeled Artemis.
    This should be called every time at the beginning of any any functionality to ensure the
    state and cache are aligned and no data is ever lost or overwritten.
    */
//   if (!path) {
//     path = "./artemisCache.json";
//   }
//   //Sets a default path if one is not passed as an argument
//   try {
//     const data = Deno.readTextFileSync(path);
//     state.artemis = JSON.parse(data);
//     //Parses the data saved in artemisCache and saves it on ctx.state.
//     return state.artemis;
//   } catch (err) {
//     if (err instanceof Deno.errors.NotFound) {
//       Deno.writeTextFileSync(path, JSON.stringify([]));
//       state.artemis = [];
//       //In any instance that artemisCache doesn't exist (ie the first time a client uses
//       //Artemis) an artemisCache json file is created with an empty array inside
//       return "JSON file created";
//     }
//     console.log(err);
//     return err.message;
//   }
// };

// export default syncCacheAndState;
