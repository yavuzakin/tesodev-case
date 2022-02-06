import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Results from "../../components/results/Results";
import Search from "../../components/search/Search";
import {
  fetchDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../../data/data";

import "./landing.css";

function Landing() {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const showMoreHandler = () => {
    navigate("/search-results", { state: results });
  };

  useEffect(() => {
    saveDataToLocalStorage();
    setData(fetchDataFromLocalStorage());
  }, []);

  return (
    <div className="landing-container">
      <img className="landing-img" src="/images/landing-logo.png" alt="logo" />
      <span className="logo-text">Search web app</span>
      <Search data={data} setResults={setResults} setPage={() => {}} />
      {results.length !== 0 && (
        <div className="landing-results-container">
          <div className="landing-results-inner-container">
            <Results results={results.slice(0, 3)} />
            <p onClick={showMoreHandler} className="show-more">
              Show more...
            </p>
          </div>
          <button className="placeholder-button">Search</button>
        </div>
      )}
    </div>
  );
}

export default Landing;
