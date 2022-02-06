import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Pagination from "../../components/pagination/Pagination";
import Results from "../../components/results/Results";
import Search from "../../components/search/Search";
import {
  fetchDataFromLocalStorage,
  orderedData,
  showData,
} from "../../data/data";
import { update } from "../../redux/inputSlice";

import "./search-results.css";

function SearchResults() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderMethod, setOrderMethod] = useState(0);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(location.state);
  const pageCount = Math.ceil(results.length / 6);
  const dispatch = useDispatch();

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const initializeSearchInput = () => {
    dispatch(update({ input: "" }));
  };

  useEffect(() => {
    setData(fetchDataFromLocalStorage());
  }, []);

  return (
    <div className="search-results-page-container">
      <div className="top-section-container">
        <Link to={"/"} onClick={initializeSearchInput}>
          <img
            className="search-results-img"
            src="/images/search-results-logo.png"
            alt="logo"
          />
        </Link>
        <Search data={data} setResults={setResults} setPage={setPage} />
      </div>
      <div className="order-by-container">
        <img
          src="/images/updown-arrows.png"
          className="updown-arrows"
          alt="icon"
        />
        <button
          disabled={results.length === 0}
          onClick={modalHandler}
          className="order-by"
        >
          Order By
        </button>
      </div>
      <div className="modal-container">
        {isModalOpen && (
          <Modal setOrderMethod={setOrderMethod} modalHandler={modalHandler} />
        )}
      </div>
      <div className="search-results-container">
        <Results results={showData(orderedData(results, orderMethod), page)} />
      </div>
      <div className="pagination-container">
        {results.length > 6 && (
          <Pagination
            pageCount={pageCount}
            setPage={setPage}
            activePage={page}
          />
        )}
      </div>
    </div>
  );
}

export default SearchResults;
