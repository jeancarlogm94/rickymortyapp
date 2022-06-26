import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import InputGroup from '../components/Filter/category/InputGroup';
import Loading from '../components/Loading/Loading';

const Episodes = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    setLoading(true);
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      setLoading(false);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      setLoading(false);
    })();
  }, [api]);

  // console.log(results);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3 text-light">
          Episode {id}:{' '}
          <span className="text-light">{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className="text-center text-light">
          Air Date: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center text-light mb-4">Select Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
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
