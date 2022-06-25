import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ page, results, Search }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      const { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`${page}${id}`}
          key={id}
          className="mx-auto col-md-4 col-sm-6 col-10 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <div
              style={{
                marginLeft: 'auto',
              }}
              className="rounded bg-dark  text-light text-end fs-8 px-2 fw-bold"
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
            <div>
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div
                style={{
                  backgroundColor: '#28527a',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
                className="character-name text-center text-light p-1 fs-5 fw-bold"
              >
                {name}
              </div>
              <div
                style={{
                  backgroundColor: '#08b2c9',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
                className="text-center p-2 fs-7 fw-bold"
              >
                {location.name}
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <h2 className="text-center my-6 text-light">
        No characters were found with the search
        {/* <strong>{Search()}"</strong> */}
      </h2>
    );
  }

  return <>{display}</>;
};

export default Card;
