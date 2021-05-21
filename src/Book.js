import React, { useState } from 'react';

const Book = (props)=>{
    const [showEdit,setShowEdit]= useState({title: props.book.title, editable:false})
   const [title,setTitle]= useState('')
  //const showEdit = false;
 //   const title ='';
    return(
    <div style={{border:"3px dashed red", margin:'10px',  padding:'20px'}}>
        {props.children}
        <h3>{showEdit.title}</h3>  
        {/* {showEdit ? 'True' : 'False'}<input type= 'text'></input> */}
        {
            showEdit.editable &&
            <input type='text' value={showEdit.title} 
                                                onChange={(e)=>setShowEdit({...showEdit,title: e.target.value})}
                                                onBlur={(e)=>{
                                                    //setTitle(e.target.value);
                                                    //props.onEdit(props.book.id, e.target.value);
                                                    //setShowEdit(false);
                                                    props.onEdit(props.book._id, showEdit.title);
                                                    setShowEdit({...showEdit,editable:false})
                                            }}></input>}

        { 
            !showEdit.editable && <button onClick={()=>{
                                            setShowEdit({...showEdit, editable:true});
                                            //setTitle(props.book.title);
                                    }}>Edit</button>
        }
        <button onClick={props.onRemove}>Remove</button>


        {/* <button onClick={()=>{
            setShowEdit(true);
            //setTitle(props.book.title);
       }}>Edit</button> */}
    </div>
    )
}

export default Book;