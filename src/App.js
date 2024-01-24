import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();

  }, [api])
  return (
    <div className="App">

      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>

  );
}

export default App;
