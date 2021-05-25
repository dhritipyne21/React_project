import React, { useState } from 'react';
import EditBook from './EditBook';

const Book = (props)=>{

    return(
    <div style={{border:"3px dashed red", margin:'10px',  padding:'20px'}}>
       
        {/* {props.children} */}
        <h1>{props.book.title}</h1>  
        <h2>Category: {props.book.category}</h2>
        <h2>Publish Date: {props.book.publish_date}</h2>
        <h2>Cost: {props.book.cost}</h2>
        <button onClick={props.onRemove}>Remove</button>
      
        <EditBook key= {props.book._id} book={props.book}
                                      editBook={props.onEdit}
                                    
                                    ></EditBook>

        
    </div>
    )
 }
export default Book;