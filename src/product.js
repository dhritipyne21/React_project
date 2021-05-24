// import React from 'react';

// const Product = (props)=>{
//     const UI = {color:"green", backgroundColor:"#afa"}
//     return(
//     <div style={{color:"white"}}>
//         <h1 style={UI}>Product Name : {props.name}</h1>
//         <h1>Product Price : {props.price}</h1>
//         <h1>Qty : {props.qty}</h1>

//         <button type="submit" value="BUY" onClick={(e)=>{console.log(("clicking.....",e.target.value))}}>BUY</button>
      
//     </div>
//     )
// }

// export default Product;

import React, { useState } from 'react';

const Product = (props)=>{
   
  //const showEdit = false;
 //   const title ='';
    return(
        
    <div style={{border:"3px dashed red", margin:'10px',  padding:'20px', backgroundColor: `${(props.product.Cost>100)? 'green':''}`}}>
        {props.children}
        <h3>{props.product.Product}</h3>  
        <h3>{props.product.Cost}</h3>  
       

       
    </div>
    )
}

export default Product;