import React from 'react';
import PackageRow from './PackageRow.jsx'

const NestedGrid = ({ dataRows }) => {

  return (
    <React.Fragment>
      {
        dataRows.length > 0 ?
          dataRows.map((item, i) => {
            return <PackageRow rowArr={item} key={i} />
          })
          :
          <div>No data</div>
      }
    </React.Fragment>

  )
}

export default NestedGrid;
