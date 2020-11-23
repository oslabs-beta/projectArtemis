import { useState, useEffect } from 'https://esm.sh/react';

const createData = (() => {
  let count = 0;
  return () => {
    count += 1;
    return {
      [`query${count}`]: Math.random(),
    };
  };
})();

const useTest = () => {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setQueryData((prevQueryData) => [...prevQueryData, createData()]);
    }, 5000);
  }, []);

  return [queryData] as const;
};

export default useTest;
