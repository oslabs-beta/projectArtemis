const clearSnapshots = (state: any, path?: string) => {
    console.log("you're in clearSnapshots")
        if (!path) {
            path = "./artemisCache.json"
        }   
        //Sets a default path if one is not passed as an argument
        try {
            state.artemis = []
            Deno.writeTextFileSync(path, JSON.stringify(state.artemis));
            console.log("You've successfully cleared all data")
            console.log("State.artemis: ", state.artemis)
        }
        catch (err) {
            console.log(err)
            return err.message
        }
    }


export default clearSnapshots