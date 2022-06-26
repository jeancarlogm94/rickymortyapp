import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CardDetail.module.scss';
import back from '../../assets/img/back.png';

const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species, episode } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  // console.log(fetchedData);

  return (
    <div className="d-flex flex-start">
      <Link to="/" className="d-flex flex-start">
        <div
          className="position-absolute"
          style={{ marginTop: '10px', marginLeft: '10%' }}
        >
          <img style={{ width: '50px', height: '50px' }} src={back} alt="" />
        </div>
      </Link>
      <div className="container d-flex justify-content-center mb-5">
        <div
          className={`${styles.card} d-flex flex-column justify-content-center`}
        >
          <div
            style={{
              marginLeft: 'auto',
              borderRadius: '50px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
            className="text-light text-end fs-8 px-2 fw-bold"
          >
            {(() => {
              if (status === 'Dead') {
                return (
                  <div>
                    <button
                      style={{
                        backgroundColor: 'red',
                        marginRight: '5px',
                        marginBottom: '6px',
                        borderRadius: '50%',
                        border: 'none',
                        height: '12px',
                        width: '10px',
                      }}
                    ></button>
                    {status}
                  </div>
                );
              } else if (status === 'Alive') {
                return (
                  <div>
                    <button
                      style={{
                        backgroundColor: '#2ce40f',
                        marginRight: '5px',
                        marginBottom: '6px',
                        borderRadius: '50%',
                        border: 'none',
                        height: '12px',
                        width: '10px',
                      }}
                    ></button>
                    {status}
                  </div>
                );
              } else {
                return (
                  <div>
                    <button
                      style={{
                        backgroundColor: 'grey',
                        marginRight: '5px',
                        marginBottom: '6px',
                        borderRadius: '50%',
                        border: 'none',
                        height: '12px',
                        width: '10px',
                      }}
                    ></button>
                    {status}
                  </div>
                );
              }
            })()}
          </div>
          <img className={`${styles.img} img-fluid`} src={image} alt="" />
          <h1 className="text-center text-light">{name}</h1>
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
            }}
            className="content py-2 mt-0 text-light text-center"
          >
            <div className="">
              <span className="fw-bold">Gender : </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Location: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="fw-bold">Origin: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Species: </span>
              {species}
            </div>
            <div className="">
              <span className="fw-bold">Episodes: </span>
              {episode?.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
