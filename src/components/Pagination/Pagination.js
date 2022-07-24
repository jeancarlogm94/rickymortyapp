import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // console.log(info);

  return (
    <>
      {/* <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style> */}
      <div className="mb-5">
        <ReactPaginate
          className="pagination text-light gap-3"
          nextLabel=">"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="<"
          previousClassName="btn btn-dark fs-6 prev"
          nextClassName="btn btn-dark fs-6 next"
          activeClassName="active"
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          pageCount={info?.pages}
          onPageChange={pageChange}
          pageClassName="page-item"
          pageLinkClassName="rounded-2 page-link"
        />
      </div>
    </>
  );
};

export default Pagination;
