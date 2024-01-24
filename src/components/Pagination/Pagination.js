import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    
    <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber===1? 0: pageNumber -1}
        nextLabel="Next"
        previousLabel="Prev"
        previousLinkClassName="btn btn-primary fs-5 prev"
        nextLinkClassName="btn btn-primary fs-5 next"
        pageCount={info?.pages}
        pageClassName="page-item"
        activeClassName="active"
        pageLinkClassName="page-link"
        onPageChange={(data)=>{
          setPageNumber(data.selected +1);
        }}
      />
  );
};

export default Pagination;
