import React from "react";
const Pagination = ({ hotelsPerPage, hotelNumber, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(hotelNumber / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="paginationNav">
      <ul className="paginationUl">
        {pageNumbers.map((number) => (
          <li key={number} style={{ display: "inline" }}>
            <a
              className="paginationUl__a"
              onClick={() => paginate(number)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
