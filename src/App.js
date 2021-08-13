import React, { useEffect, useState } from "react";

import "./App.css";
import { getAllQuotesByAuthor, getRandomQuote } from "./quoteService";
import Box from "./components/Box";

function App() {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [bool, setBool] = useState(false);
  useEffect(() => {
    fetchData();
    setBool(false);
  }, []);

  const fetchData = async () => {
    const response = await getRandomQuote().then((d) => d);
    setData(response);
  };
  const fetchAllData = async (author) => {
    const response = await getAllQuotesByAuthor(author).then((d) => d);
    setAllData(response);
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
          <span class="material-icons-outlined material-icons">autorenew</span>
        </div>
      </header>

      <main>
        {bool ? (
          <>
            <h3>{data.author}</h3>
            {allData &&
              allData.results.map((d) => (
                <React.Fragment key={d._id}>
                  <Box data={d} />
                </React.Fragment>
              ))}
          </>
        ) : (
          <Box data={data} />
        )}
      </main>
      {!bool && (
        <button
          className="author-button"
          onClick={() => showAllQuotes(data.author)}
        >
          <div>{data && data.author}</div>
          <div>
            <span>&#8594;</span>
          </div>
        </button>
      )}

      <footer>created by nihal - devChallenges.io</footer>
    </div>
  );
}

export default App;
