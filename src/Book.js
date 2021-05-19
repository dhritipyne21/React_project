import React, { useState } from 'react';

const Book = (props)=>{
    const [showEdit,setShowEdit]= useState(false)
   const [title,setTitle]= useState('')
  //const showEdit = false;
 //   const title ='';
    return(
    <div style={{border:"3px dashed red", margin:'10px',  padding:'20px'}}>
        <h3>{props.book.title}</h3>  
        {/* {showEdit ? 'True' : 'False'}<input type= 'text'></input> */}
        {
            showEdit &&
            <input type= 'text' onBlur={(e)=>{
                                                    setTitle(e.target.value);
                                                    props.onEdit(props.book.id, e.target.value);
                                                    setShowEdit(false);
                                            }}></input>}
        <button onClick={props.onRemove}>Remove</button>
        <button onClick={()=>{
            setShowEdit(true);
            //setTitle(props.book.title);
       }}>Edit</button>
    </div>
    )
}

export default Book;