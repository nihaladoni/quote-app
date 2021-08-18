import React, { useEffect, useState } from "react";

import "./App.css";
import { getAllQuotesByAuthor, getRandomQuote } from "./quoteService";
import Box from "./components/Box";
import Skeleton from "react-loading-skeleton";

function App() {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [bool, setBool] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
    setBool(false);
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getRandomQuote();
    setData(response);
    setIsLoading(false);
  };
  const fetchAllData = async (author) => {
    setIsLoading(true);
    const response = await getAllQuotesByAuthor(author);
    setAllData(response);
    setIsLoading(false);
  };

  const showAllQuotes = (author) => {
    setBool(true);
    fetchAllData(author);
  };

  return (
    <div className={bool ? "detail" : "App"}>
      <header>
        <div
          className="head"
          onClick={() => {
            fetchData();
            setBool(false);
          }}
        >
          <p>random</p>
          <span className="material-icons-outlined material-icons">
            autorenew
          </span>
        </div>
      </header>
      <main>
        {bool ? (
          <>
            <h3>{data.author}</h3>
            {allData &&
              allData.results.map((d) => (
                <React.Fragment key={d._id}>
                  <Box data={d} loading={isLoading} />
                </React.Fragment>
              ))}
          </>
        ) : (
          <Box data={data} loading={isLoading} />
        )}

        {!bool && (
          <button
            className="author-button"
            onClick={() => showAllQuotes(data.author)}
          >
            <p>
              {(isLoading && <Skeleton height={30} count={4} />) ||
                (data && data.author)}
            </p>

            <div>{!isLoading && <span>&#8594;</span>}</div>
          </button>
        )}
      </main>

      <footer>created by nihal - devChallenges.io</footer>
    </div>
  );
}

export default App;
