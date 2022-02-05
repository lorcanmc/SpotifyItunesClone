import react, { useState, useEffect } from "react";

export default function useFetch(query) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${query}&media=music&enitity=album&limit=24`
      );
      const json = await res.json();
      setResponse(json.results);
    }
    loadData();
  }, [query]);

  return response;
}
