import React from 'react';
import './sellhere.css'

const SellHere = () => {
  return (
    <div className="sell-here">
      <div className="box" id="sell-here-box">  
      <form>
        <label>Product Name</label>
          <input className="input is-rounded" type="text" placeholder="Enter product name"/>
        <label>Product Detials</label>
          <input className="input is-rounded" type="text" placeholder="Enter products details"/>
        <label>Image</label>
          <input className="input is-rounded" type="file" name="pic" accept="image/*"/>
        <label>Quantity</label>
          <input className="input is-rounded" type="number" placeholder="Enter quantiy"/>
        <label>Price per Piece</label>
          <input className="input is-rounded" type="number" placeholder="Enter price"/>
        <button className="button is-primary is-rounded">Submit</button> 
      </form>
      </div>
    </div>
  );
}
 
export default SellHere;