import { useEffect, useState } from "https://esm.sh/react";
import syncCacheAndState from "../functions/sync.ts";

const useData = () => {
  const [queryData, setQueryData] = useState<any>([]);
  useEffect(() => {
    setInterval(() => {
      setQueryData([{test: 11}]);
      console.log('hey yo');
    }, 2000);
  }, []);

  return [queryData] as const;
};

export default useData;
