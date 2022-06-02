import React from 'react'
import '../Product/Product.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../../StateProvider';
function Product(props) {
  const [{basket},dispatch]= useStateValue();
  console.log("this is the basket >>>",basket);
  const addToBasket = ()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:props.id,
        title:props.title,
        image:props.image,
        price:props.price,
        rating:props.rating
      }
    })
  }
  return (
    <div className='product'>
        <div className="product_info">
            <p>{props.title}</p>
            <p className='product_price'>
              <small>$</small>
              <strong>{props.price}</strong>
            </p>
            <div className="product_rating">
              {Array(props.rating).fill().map((_,i)=>{
                return(
                  <p style={{color:'yellow'}}><StarRateIcon/></p>
                )
                
              })}
              
            </div>
        </div>

        <img 
        src={props.image} alt="productImage" 
        />
        <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product