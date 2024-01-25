import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Favorites from './Pages/Favorites';


function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/episodes' element={<Episodes/>}></Route>
          <Route path='/location' element={<Location/>}></Route>
          <Route path="/favoriteCharacters" element={<Favorites/>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();

  }, [api])
  return (
    <div className="App">
      <Search
        setPageNumber={setPageNumber}
        setSearch={setSearch}>
      </Search>

      <div className="container">
        <div className="row">

          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>

  );
}
export { store, persistor };
export default App;
