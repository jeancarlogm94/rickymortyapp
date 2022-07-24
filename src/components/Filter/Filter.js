import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateGender('');
    updateStatus('');
    updateSpecies('');
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="mx-auto col-lg-3 col-10 mb-5">
      <div className="text-center text-light fw-bold fs-2 mb-2">Filters</div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={clear}
        className="text-light text-center mb-3 fs-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="myaccordion">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
      </div>
    </div>
  );
};

export default Filter;
