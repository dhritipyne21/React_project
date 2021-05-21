import axios from "axios";
import { useEffect, useState } from "react";
import Books from "./Books";


const HttpExample = (props) => {
    const [counter,setCounter]=useState(100)
    const [books,setBooks]=useState([])
    useEffect(()=>{
        console.log('Calling...')
        return ()=>{
            console.log('cleaning...')
        }
    },[counter])
    useEffect(()=>{
        console.log('Called on every render')
        // fetch('http://localhost:5000/books').then(response=>response.json()).then((data)=>{
        //    // console.log(data.json)
        //     setBooks(data)
        // })
        axios.get('http://localhost:5000/books').then((res)=>{
                setBooks(res.data)
            })
    },[])
    useEffect(()=>{
        console.log('Called on first render...')
    },[])
    useEffect(()=>{
        console.log('called on state change...')
    },[counter])
    useEffect(()=>{
        console.log('called on state change...')
        return ()=>{
            console.log('cleaning...')
        }
    })
    return <div>Sample {counter}
     <button onClick={()=>{
         const incr=counter+1
         setCounter(incr)
         }}>Change counter</button>
         {
             books.map(b=><p>{b.title}</p>)
         }
    </div>
}
export default HttpExample