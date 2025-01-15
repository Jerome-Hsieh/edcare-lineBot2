import React, { useState } from 'react';

const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`page-button ${activePage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageClick(Math.max(1, activePage - 1))}
        disabled={activePage === 1}
        className="page-button"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageClick(Math.min(totalPages, activePage + 1))}
        disabled={activePage === totalPages}
        className="page-button"
      >
        &gt;
      </button>
      <style>{`
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent; /* Pink background */
          padding: 10px;
          border-radius: 5px;
        }
        .page-button {
          margin: 0 5px;
          padding: 8px 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
          color: #333;
        }
        .page-button.active {
          background-color: #fff;
          color: #d9534f;
          border-radius: 50%;
        }
        .page-button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

const App = ({ totalItems,fetchNannyInfoList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Example page size

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchNannyInfoList(page);
  };

  return (
    <div>
      <Pagination
        totalItems={totalItems}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        fetchNannyInfoList={fetchNannyInfoList} // Pass the function as a prop
      />
    </div>
  );
};

export default App;
