import React from 'react';
import './sellhere.css'
import { useContext } from 'react';
import { SellHereContext } from '../../context/SellHereContext';

const SellHere = () => {
  const {isLoading, setImageUrl,setProductName,setProductDetails,setPricePerItem, handleSubmit,emptyAllField}  = useContext(SellHereContext)

  return (
    <div className="sell-here">
      <h1 className="sell-product-heading animated bounceInLeft">Sell Your Product With Us</h1>
      <div className="box animated bounceInDown" id="sell-here-box">  
        <form onSubmit={handleSubmit}>
          <label className="label">Product Name</label>
            <input onChange={e=>setProductName(e.target.value)} className="input is-rounded" required type="text" placeholder="Enter product name"/>
          <label className="label">Product Image Url</label>
          <input onChange={e=>setImageUrl(e.target.value)} className="input is-rounded" type="text" required placeholder="URL for your product image"/>
            {/* <input className="input is-rounded" type="file" name="pic" accept="image/*" onChange={readFileLocation} id="image-file"/> */}
          <label className="label">Price</label>
            <input  onChange={e=>setPricePerItem(e.target.value)} className="input is-rounded" required type="number" placeholder="Enter price"/>
          <label className="label">Product Details</label>
            <div className="control">
              <textarea onChange={e=>setProductDetails(e.target.value)} className="textarea" required placeholder="Enter your product details"></textarea>
            </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-rounded is-primary">Submit</button>
            </div>
            <div className="control">
              <button onClick={emptyAllField} type="button" className="button is-rounded is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default SellHere;