import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {

    let next = () => {
        setPageNumber((x) => x + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber((x) => x - 1);
    };

    return (
        <div className='container d-flex justify-content-center gap-5 my-4'>
            <button onClick={prev} className='btn btn-primary'>Prev</button>
            <button onClick={next} className='btn btn-primary'>Next</button>
        </div>
    )
}

export default Pagination
