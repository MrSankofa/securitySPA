import React from 'react';
import Package from './Package.jsx';

const PackageRow = ({ rowArr }) => {

  return (
    rowArr.length > 0 ?
      rowArr.map((item, i) => {
        return <Package packageType={item} key={i} />
      }) :
      <div>No Data</div>
  )
}

export default PackageRow;