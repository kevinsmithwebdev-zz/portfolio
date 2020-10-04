import React from 'react';
import './DataError.css';

type PropTypes = {
  retryFetchData: Function,
}


const DataError = ({ retryFetchData }: PropTypes) => (
  <div className='DataError'>
    The data fetch failed.&nbsp;&nbsp;&nbsp;
    <button
      className='button'
      onClick={ () => retryFetchData() }
    >
      Retry
    </button>
  </div>
);


export default DataError;