import { useEffect, useState } from 'https://esm.sh/react';

const useData = () => {
  const [queryData, setQueryData] = useState<any>([]);

  useEffect(() => {
    const getData = () => {
      fetch('http://localhost:4015/artemis')
        .then((response) => response.json())
        .then((data) => setQueryData(data.artemis))
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  return [queryData] as const;
};

export default useData;
