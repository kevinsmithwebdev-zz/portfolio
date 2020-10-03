import { useState, useEffect } from 'react';
const Origin = ''; // WOWSERS!

const useRequest = (url: string) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { headers: { Origin } });
        const parsedData = await response.json();
        setData(parsedData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(true);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};

export default useRequest;
