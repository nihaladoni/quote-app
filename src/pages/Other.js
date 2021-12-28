import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { getAllQuotesByAuthor } from "../quoteService";

const Other = ({ author }) => {
  const [allData, setAllData] = useState();

  const fetchAllData = async (author) => {
    const response = await getAllQuotesByAuthor(author);
    setAllData(response);
  };

  useEffect(() => {
    fetchAllData(author);
  }, [author]);

  return (
    <div className="detail">
      <h3>{author}</h3>
      {allData &&
        allData.results.map((d) => (
          <React.Fragment key={d._id}>
            <Box data={d} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Other;
