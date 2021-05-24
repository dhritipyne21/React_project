import React, { useState } from 'react';

const Book = (props)=>{
    const [showEdit,setShowEdit]= useState({title: props.book.title, category: props.book.category, publish_date: props.book.publish_date, cost: props.book.cost, editable:false})
   
    return(
    <div style={{border:"3px dashed red", margin:'10px',  padding:'20px'}}>
        {/* {props.children} */}
        <h1>{showEdit.title}</h1>  
        <h2>Category: {showEdit.category}</h2>
        <h2>Publish Date: {showEdit.publish_date}</h2>
        <h2>Cost: {showEdit.cost}</h2>
        {
            showEdit.editable &&
            <input type='text' value={showEdit.title} 
                                                onChange={(e)=>setShowEdit({...showEdit,title: e.target.value})}
                                                onBlur={(e)=>{
                                                    props.onEdit(props.book._id, showEdit.title);
                                                    setShowEdit({...showEdit,editable:false})
                                            }}></input>}

        { 
            !showEdit.editable && <button onClick={()=>{
                                            setShowEdit({...showEdit, editable:true});
                                    }}>Edit</button>
        }
        <button onClick={props.onRemove}>Remove</button>
    </div>
    )
}



export default Book;