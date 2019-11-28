import React from 'react';

const Loading = () => {
  return ( 
    <div className="progress" style={{ width: '40%', marginTop: '10px', marginBottom: '10px' }}>
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%"}}></div>
    </div>
   );
}
 
export default Loading;