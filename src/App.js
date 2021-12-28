import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Other from "./pages/Other.js";
import { getRandomQuote } from "./quoteService";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getRandomQuote();
    setData(response);
    setIsLoading(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home fetchData={fetchData} data={data} isLoading={isLoading} />
        }
      />
      <Route path="/other" element={<Other author={data?.author} />} />
    </Routes>
  );
}

export default App;
