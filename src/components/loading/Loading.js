import React from 'react';
import './loading.css'

const Loading = () => {
  return (
    <div className="loading-back">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
}
 
export default Loading;