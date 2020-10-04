import { useState, useEffect } from 'react';
const Origin = ''; // asdf work on this

const useRequest = (url: string) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setData({});
      setError(null);
      const response = await fetch(url, { headers: { Origin } });
      const parsedData = await response.json();
      setData({ data: parsedData });
    } catch (err) {
      setData({});
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, error, retryFetchData: fetchData };
};

export default useRequest;
