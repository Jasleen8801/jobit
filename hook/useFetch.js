import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = "e91f5e50c9msh45c94368e0e2376p150ba4jsncecd9fbdf57f";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // console.log(endpoint)
      // console.log(query);
      const response = await axios.get(
        `https://jsearch.p.rapidapi.com/${endpoint}`,
        {
          params: { ...query },
          headers: {
            "X-RapidAPI-Key":
              "e91f5e50c9msh45c94368e0e2376p150ba4jsncecd9fbdf57f",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        }
      );
      console.log(response);
      // setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
