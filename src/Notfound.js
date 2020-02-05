import React from 'react';
import NotFoundImg from './pale-fatal-error.png'

const NotFound = () => {
  return (
    <div style={{paddingTop: "500"}}>
      <h1>Not Found</h1>
      <img src={NotFoundImg} alt="not found"/>
    </div>
  );
}
 
export default NotFound;