import React from 'react'
import './CheckoutProduct.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct(props) {
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket =()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:props.id

    })
  }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={props.image} alt="checkoutImage" />
        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>
                {props.title}
            </p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="checkoutProduct_rating">
            {Array(props.rating).fill().map((_,i)=>{
                return(
                  <p style={{color:'yellow'}}><StarRateIcon/></p>
                )
                
              })}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct