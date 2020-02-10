import React from 'react';
import NotFoundImg from './pale-fatal-error.png'

const NotFound = () => {
  return (
    <div style={{paddingTop: 100, display:"flex", justifyContent:"center", height:'100vh', alignItems:"center"}}>
      <img src={NotFoundImg} alt="not found" width='800' height="200"/>
    </div>
  );
}
 
export default NotFound;