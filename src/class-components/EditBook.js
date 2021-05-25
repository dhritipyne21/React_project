import React, { useState } from 'react';

const EditBook = (props)=>{
    const [showEdit,setShowEdit]= useState({title: props.book.title, category: props.book.category, publish_date: props.book.publish_date, cost: props.book.cost})
    const [editable,setEditable]= useState(false)
    return(
    <div >
        {/* {props.children} */}
       
      
        {
            editable && 
            <div style={{border:"3px dashed red", margin:'10px',  padding:'20px' ,textAlign: "left"}}>
                 <h1>{showEdit.title}</h1> 
            <label>Edit Title:</label>
                <input type='text' value={showEdit.title} 
                                                onChange={(e)=>setShowEdit({...showEdit,title: e.target.value})}
                                            //     onBlur={(e)=>{
                                            //         props.onEdit(props.book._id, showEdit.title);
                                            //         setShowEdit({...showEdit,editable:false})
                                            // }}
                                            ></input><br></br>
            <label>Edit Category:</label>
                      <select name="category" id="category" value={showEdit.category} onChange={(e)=>setShowEdit({...showEdit,category: e.target.value})}>
                        <option value="Novel">Novel</option>
                        <option value="Comic">Comic</option>
                        <option value="Fiction">Fiction</option>
                        </select><br></br>
            
            <label>Edit Publish Date:</label>
                <input type='date' value={showEdit.publish_date} 
                                                onChange={(e)=>setShowEdit({...showEdit,publish_date: e.target.value})}
                                               ></input><br></br>

            <label>Edit Price:</label>
                <input type='text' value={showEdit.cost} 
                                                onChange={(e)=>setShowEdit({...showEdit,cost: e.target.value})}
                                               ></input><br></br>

        
            <button onClick={()=>{
                        props.editBook(props.book._id, showEdit.title,showEdit.category,showEdit.publish_date,showEdit.cost,showEdit.ok)
                        setEditable(!editable)
             } }>Update</button>
        
            <button onClick={()=>setEditable(!editable)}>Cancel</button>
            </div>
        }
         { 
            !editable && <button onClick={()=>{
                                           setEditable(true);
                                            //setTitle(props.book.title);
                                    }}>Edit</button>
        }
            
    </div>
    )
}



export default EditBook;