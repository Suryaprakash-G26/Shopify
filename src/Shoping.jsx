/* eslint-disable react/prop-types */
import { useState } from 'react';

export function Shoping({ name, image,price, setcart, cartvalue }) {
  const [show, setshow] = useState(true);


  const addkey = () => {
    setcart(cartvalue + 1);
    setshow(!show);
  };
  const removekey = () => {
    setshow(!show);
    setcart(cartvalue - 1);
  };
  return (
    <div className="Shopping">

            <div className="card">
            <div className="image">
              <img src={image} alt="product" />
            </div>
            <div className="productname">
              <h2 className='Phone'>{name}</h2>
              <h3 className='Rate'>₹{price}/-</h3>
            </div>
            <div className="purchase">
              {show === true ?
                <button className='cartbutton' onClick={addkey}>
                  <span className="material-symbols-outlined"> add_shopping_cart</span>
                  Add to Cart</button> :
                <button className='cartbutton' onClick={removekey}>
                  <span className="material-symbols-outlined"> remove_shopping_cart </span>
                  Remove from Cart</button>}
            </div>

            </div>

    </div>
  );
}



