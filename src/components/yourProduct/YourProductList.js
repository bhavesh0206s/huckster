import React, {useContext } from 'react';
import YourProduct from './YourProduct';
import { useEffect } from 'react';
import '../product/product.css'
import { YourProductContext } from '../../context/YourProductContext';

const YourProductList = () => {
  const {updateYourProductList, deleteItem, yourProductInfo} = useContext(YourProductContext)

  useEffect(()=>{
    updateYourProductList()
    console.log('done')
  },[]);
    
  return (
    <div className="product-home">
      <div className="grid">
        {yourProductInfo.map(info => 
          <YourProduct 
            id={info.id}
            key={info.id}
            deleteItem={deleteItem}
            pricePerItem={info.price_per_item} 
            productName={info.product_name} 
            imageUrl={info.image_url} 
            productDetails={info.product_details} 
          />
        )}
      </div>  
    </div>
  );
}
 
export default YourProductList;