import { useState, useEffect } from "react";

export default function useFetch(query, limit) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${query}&media=music&limit=${limit}`
      );
      const json = await res.json();
      setResponse(json.results);
    }
    loadData();
  }, [query, limit]);

  return response;
}
