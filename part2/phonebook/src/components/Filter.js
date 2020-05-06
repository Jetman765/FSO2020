import React from 'react';

const Filter = ({ filterName, handleNewNameFilter }) => {
  return (
    <div>
      filter shown with {<input value={filterName} onChange={handleNewNameFilter} />}
    </div>
  )
}

export default Filter;