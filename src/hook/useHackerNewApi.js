import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewApi(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [errorMessage, setErrorMessage] = useState();
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const respone = await axios.get(url);
      setData(respone.data || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error happend ${err}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    query,
    setQuery,
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
