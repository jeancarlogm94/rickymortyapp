import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import InputGroup from '../components/Filter/category/InputGroup';
import Loading from '../components/Loading/Loading';
import axios from 'axios';

const Episodes = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    setLoading(true);
    axios.get(api).then((res) => setInfo(res.data));
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      setTimeout(() => setLoading(), 1000);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      setTimeout(() => setLoading(), 1000);
    })();
  }, [api]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="row mb-3">
          <h1 className="text-center mb-3 text-light">
            Episode {id}:{' '}
            <span className="text-light">{name === '' ? 'Unknown' : name}</span>
          </h1>
          <h5 className="text-center text-light">
            Air Date: {air_date === '' ? 'Unknown' : air_date}
          </h5>
          <h5 className="text-center text-light">
            Episode: {info.episode === '' ? 'Unknown' : info.episode}
          </h5>
          <h5 className="text-center text-light">
            Characters:{' '}
            {info.characters === '' ? 'Unknown' : info.characters?.length}
          </h5>
        </div>
      )}

      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center text-light mb-4">Select Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-9 col-12">
          {loading ? (
            <Loading />
          ) : (
            <div className="row">
              <Card page="/" results={results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
