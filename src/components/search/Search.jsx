import { useState } from "react";
import { filterData } from "../../data/data";

import "./search.css";

function Search({ data, setResults, setPage }) {
  const [input, setInput] = useState("");

  const searchHandler = () => {
    const filteredData = filterData(data, input.trim());
    setResults(filteredData);
    setPage(1);
  };

  return (
    <div className="search-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button onClick={searchHandler} className="search-button">
        Search
      </button>
    </div>
  );
}

export default Search;
