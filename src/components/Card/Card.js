import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ page, results }) => {
  let display;

  console.log(results);

  if (results) {
    display = results.map((x) => {
      const { id, image, name, status } = x;

      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`${page}${id}`}
          key={id}
          className="mx-auto col-md-4 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} mx-auto d-flex flex-column justify-content-center`}
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
            <div className="text-center">
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                }}
                className="character-name text-center text-light p-1 fs-5 fw-bold"
              >
                {name}
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <div
        style={{
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: '#08b2c9',
          }}
          className="mx-auto rounded text-center my-6 py-5"
        >
          Character Not Found
        </h2>
      </div>
    );
  }

  return <>{display}</>;
};

export default Card;
