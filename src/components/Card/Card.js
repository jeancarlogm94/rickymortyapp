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
            <div>
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div
                style={{
                  backgroundColor: '#28527a',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
                className="character-name text-center text-light pb-1 fs-5 fw-bold"
              >
                {name}
              </div>
              <div
                style={{
                  backgroundColor: '#08b2c9',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
                className="text-center p-2 fs-6 fw-bold"
              >
                {location.name}
              </div>
            </div>
          </div>

          {(() => {
            if (status === 'Dead') {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === 'Alive') {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = (
      <p>
        No se encontro personajes con la busqueda
        {/* <strong>{Search()}"</strong> */}
      </p>
    );
  }

  return <>{display}</>;
};

export default Card;
