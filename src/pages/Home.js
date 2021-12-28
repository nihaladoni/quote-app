import React from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

import "../App.css";
import Box from "../components/Box";

const Home = (props) => {
  let navigate = useNavigate();

  return (
    <div className="App">
      <header>
        <div
          className="head"
          onClick={() => {
            props.fetchData();
          }}
        >
          <p>random</p>
          <span className="material-icons-outlined material-icons">
            autorenew
          </span>
        </div>
      </header>
      <main>
        <Box data={props.data} loading={props.isLoading} />

        <button
          className="author-button"
          onClick={() => {
            navigate("/other");
          }}
        >
          <p>
            {(props.isLoading && <Skeleton height={30} count={4} />) ||
              (props.data && props.data.author)}
          </p>

          <div>{!props.isLoading && <span>&#8594;</span>}</div>
        </button>
      </main>

      {/* <footer>created by nihal - devChallenges.io</footer> */}
    </div>
  );
};

export default Home;
