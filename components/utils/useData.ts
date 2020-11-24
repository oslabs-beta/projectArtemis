import { useState, useEffect } from 'https://esm.sh/react';

// function testie() {
//   try {
//     Deno.writeTextFileSync('./data.json', JSON.stringify(data));

//     const text = Deno.readTextFileSync('./data.json');
//     console.log(text);
//   } catch (error) {
//     console.log(error);
//   }
// }
// testie();

// TODO fix "any" in useState
const useData = () => {
  const [queryData, setQueryData] = useState<any>([]);

  useEffect(() => {
    setInterval(() => {
      //placeholder- fill in later
      // setQueryData(GregandStellasObject);
    }, 2000);
  }, []);

  return [queryData] as const;
};

export default useData;
