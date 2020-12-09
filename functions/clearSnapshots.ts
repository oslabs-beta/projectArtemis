const clearSnapshots = (path?: string) => {
  if (!path) {
    path = "../artemisCache.json";
  }
  //Sets a default path if one is not passed as an argument
  try {
    Deno.writeTextFileSync(path, JSON.stringify([]));
    console.log("You've successfully cleared all data");
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export default clearSnapshots;
