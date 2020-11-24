import { useState, useEffect } from 'https://esm.sh/react';


let data = [
  {"data" : 1},
  {"hoohaa" : 2},
  {"pacino" : 3},
  {"deniro" : 4},
  {"liotta" : 5},
  {"pesci" : 6},
  {"martinlawrence" : 7}
]

function testie(){
try{
  Deno.writeTextFileSync('./data.json', JSON.stringify(data));

  const text = Deno.readTextFileSync("./data.json");
  console.log(text) }
  catch(error){
    console.log(error)
  }
}
testie();


//this is where we'll fetch data from

const createData = (() => {
  let count = 0;
  return () => {
    count += 1;
   return {
     [`query${count}`]: Math.random(),
      }
    };
})();

//fix "any" in useState

const useData = () => {
  const [queryData, setQueryData] = useState<any>([]);
  useEffect(() => {
    setInterval(() => {
      //placeholder- fill in later
      // setQueryData(GregandStellasObject);
    }, 2000);
  }, []);
  return [queryData] as const;
}

export default useData;
