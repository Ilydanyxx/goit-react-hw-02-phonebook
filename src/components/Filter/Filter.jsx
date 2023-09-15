import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, change }) {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={change} />
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
};
