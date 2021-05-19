import React, { useState } from 'react';

const Post = ()=>{
    
    const onHeadClick = (name) => {
        console.log("clicking....."+name)
    }

   // let name='John'
    const [name, setName]=useState('')
    const [user, setUser]=useState({name:'', age:0})
    const [toggle, setToggle]=useState(true)
    const [UI, setUI]=useState({backgroundColor : '#ddd'})
  //  const UI = {color:"green", backgroundColor:"#afa"}

    // const Handler = () => {
    //     onHeadClick("Dhriti")
    // }

    // return(
    // <div>
    //     <h1 onClick={(e)=>{console.log(("clicking.....",e.target.innerHTML))}}>Advertisement</h1>
    // </div>
    // )

    return(
        <div style={UI}>
            {name}
            <br></br>
            <button value="BUY" onClick={()=>setName('Pyne')}>Toggle Name</button>
            <button value="BUY" onClick={()=>{setToggle(!toggle);
                                            setUI({backgroundColor:toggle? '#afa':'#faa'})}}>Toggle Background Color </button>
            {/* <button value="BUY" onClick={()=>setName('Pyne')}>Toggle</button> */}
            <h1 onClick={(e)=>{onHeadClick(e.target.innerHTML)}}>Advertisement</h1>
            <h1 onClick={(e)=>{onHeadClick(e.target.innerHTML)}}>Product</h1>
            <h1 onClick={(e)=>{onHeadClick(e.target.innerHTML)}}>Services</h1>

            <input type="text" onChange={(e)=>{console.log(("clicking.....",e.target.value))}}></input>
            <br></br>
            <input type="text" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}></input>
            <input type="text" value={user.age} onChange={(e)=>{setUser({...user,age:e.target.value})}}></input>
            <br></br>
            {user.name} | {user.age}
            <br></br>
            <button value="BUY" onClick={(e)=>{console.log(("clicking.....",e.target.value))}}>Select</button>
            <br></br><br></br>
        </div>
        )
}

export default Post;