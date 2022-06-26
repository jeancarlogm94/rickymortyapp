import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CardDetail.module.scss';
import Loading from '../Loading/Loading';

const CardDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species, episode } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    setLoading(true);
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setLoading(false);
    })();
  }, [api]);

  // console.log(fetchedData);

  return (
    <div className="d-flex flex-start">
      <div className="container d-flex justify-content-center">
        <div
          className={`${styles.card} d-flex flex-column justify-content-center`}
        >
          <Link to="/" className="d-flex flex-start">
            <div>
              <i
                style={{ color: 'rgba(0, 0, 0, 0.4)' }}
                class="position-absolute fa-solid fa-2x fa-house"
              ></i>
            </div>
          </Link>
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

          {loading ? (
            <Loading />
          ) : (
            <div>
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                }}
                className="content px-2 py-3 mt-0 text-light text-center"
              >
                <h1 className="text-center text-light">{name}</h1>
                <div className="">
                  <span className="fw-bold">Gender: </span>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
