import "./pagination.css";

function Pagination({ pageCount, activePage, setPage }) {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-inner-container">
      <button
        onClick={() => {
          setPage(activePage >= 2 ? activePage - 1 : 1);
        }}
        disabled={activePage === 1}
        className="page-button"
      >
        Previous
      </button>
      {pages.map((page, i) =>
        page <= 3 || page + 3 > pageCount || page === activePage ? (
          <button
            onClick={() => {
              setPage(page);
            }}
            className={
              activePage === i + 1 ? "active page-button" : "page-button"
            }
            key={i}
          >
            {page}
          </button>
        ) : (
          <span key={i} className="pagination-dot">
            {" "}
            .{" "}
          </span>
        )
      )}
      <button
        onClick={() => {
          setPage(activePage <= pageCount + 1 ? activePage + 1 : pageCount);
        }}
        disabled={activePage === pageCount}
        className="page-button"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
