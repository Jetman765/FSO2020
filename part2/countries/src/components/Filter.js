import React from 'react';

const Filter = ({ filterTerm, handleFilterNameChange }) => {
  return (
    <div>
      find countries {<input value={filterTerm} onChange={handleFilterNameChange} />}
    </div>
  );
}

export default Filter;