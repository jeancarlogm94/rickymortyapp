import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useEffect } from 'react';

import Search from './components/Search/Search';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Card/CardDetails';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState('');
  const [gender, updateGender] = useState('');
  const [species, updateSpecies] = useState('');
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState('');
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setTimeout(() => setLoading(), 1200);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center text-light mb-3">Characters</h1>
      <Search
        search={search}
        setSearch={setSearch}
        updatePageNumber={updatePageNumber}
      />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-9 col-12">
            <Pagination
              info={info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
            />
            {loading ? (
              <Loading />
            ) : (
              <div className="row">
                <Card page="/" results={results} />
              </div>
            )}
            <Pagination
              info={info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
