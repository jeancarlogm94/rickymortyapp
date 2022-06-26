import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import InputGroup from '../components/Filter/category/InputGroup';
import Loading from '../components/Loading/Loading';

const Location = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = useState([]);
  const { id, dimension, type, name, residents } = info;
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    setLoading(true);
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      setLoading(false);

      const a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      setLoading(false);
    })();
  }, [api]);

  console.log(results);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center text-light mb-3">
          Location {id}:
          <span className="text-light"> {name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className="text-center text-light">
          Dimension: {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h5 className="text-center text-light">
          Type: {type === '' ? 'Unknown' : type}
        </h5>
        <h5 className="text-center text-light">
          Residents: {residents === '' ? 'Unknown' : residents?.length}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4 text-light">Select Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          {loading ? (
            <Loading />
          ) : (
            <div className="row">
              <Card page="/location" results={results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
