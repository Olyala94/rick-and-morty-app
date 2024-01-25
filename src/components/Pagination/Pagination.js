import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    
    <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        forcePage={pageNumber===1? 0: pageNumber -1}
        nextLabel="Next"
        previousLabel="Prev"
        previousLinkclassName="btn btn-primary fs-5 prev"
        nextLinkclassName="btn btn-primary fs-5 next"
        pageCount={info?.pages}
        pageclassName="page-item"
        activeclassName="active"
        pageLinkclassName="page-link"
        onPageChange={(data)=>{
          setPageNumber(data.selected +1);
        }}
      />
  );
};

export default Pagination;
