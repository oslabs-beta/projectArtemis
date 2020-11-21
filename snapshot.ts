 const addDataSnapshot = (data: object, state: any, path: string | null = null): string => {
        if (!path) {
            path = "./artemisCache.json"
        }   
        //Sets a default path if one is not passed as an argument
        try {
            state.artemis.push(data)
            Deno.writeTextFileSync(path, JSON.stringify(state.artemis));
            console.log("You've successfully added a data snapshot")
            console.log("State.artemis: ", state.artemis)
            return `${data}`
        }
        catch (err) {
            console.log(err)
            return err.message
        }
    }


export default addDataSnapshot