import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../data/data";
import { update } from "../../redux/inputSlice";

import "./search.css";

function Search({ data, setResults, setPage }) {
  const searchInput = useSelector((state) => state.input.searchInput);
  const [input, setInput] = useState(searchInput);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const searchHandler = () => {
    const filteredData = filterData(data, input.trim());
    if (filteredData.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    dispatch(update({ input }));
    setResults(filteredData);
    setPage(1);
  };

  return (
    <div className="search-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={error ? "search-input error" : "search-input"}
      />
      <button onClick={searchHandler} className="search-button">
        Search
      </button>
    </div>
  );
}

export default Search;
