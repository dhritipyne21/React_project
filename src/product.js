import React from 'react';

const Product = (props)=>{
    const UI = {color:"green", backgroundColor:"#afa"}
    return(
    <div style={{color:"white"}}>
        <h1 style={UI}>Product Name : {props.name}</h1>
        <h1>Product Price : {props.price}</h1>
        <h1>Qty : {props.qty}</h1>

        <button type="submit" value="BUY" onClick={(e)=>{console.log(("clicking.....",e.target.value))}}>BUY</button>
      
    </div>
    )
}

export default Product;