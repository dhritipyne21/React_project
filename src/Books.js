import { useEffect, useState } from "react";

import axios from "axios";
import Book from './Book';

const Books = ()=>{
    const [books,setBooks] = useState(
        [
          // {id:1, title:'ABC'} , {id:1, title:'XYZ'} 
        ]
    )

    
    const [form,setForm]= useState({comments:'', category:''})
    const [title,setTitle]= useState('')
    const [refresh,setRefresh]=useState(true)

    const fetchBooks = () => {
        axios.get('http://localhost:5000/books').then((res)=>{
            setBooks(res.data)
            console.log(res.data)
        })
    }

    useEffect(fetchBooks,[])
    useEffect(fetchBooks,[refresh])

    // useEffect(()=>{
    //     axios.get('http://localhost:5000/books').then((res)=>{
    //             setBooks(res.data)
    //         })
    // },[])

    const addBookHandler = () => {
        // const booksCopy = [...books, {id : Math.round(Math.random()*100), title:title}];
        // setBooks(booksCopy);
        axios.post('http://localhost:5000/books', {title}).then((res)=>{
            setRefresh(!refresh)
           
        })
    }

    const removeBookHandler=(id)=>{
        console.log("Remove Book:"+id);
        // const booksCopy = [...books];
        // const filtered = booksCopy.filter((book)=>book.id !== id)
        // setBooks(filtered);
        axios.delete(`http://localhost:5000/books/${id}`).then((res)=>{
            setRefresh(!refresh)
        })
    }

    const editBookHandler=(id, title)=>{
         console.log("Edit Book:"+id+" "+title);
        // const booksCopy = [...books];
        // //const filtered = booksCopy.filter((book)=>book.id !== id);
        // //const edited = [...filtered,{id:id, title:title}];
        // const edited = booksCopy.map((b)=>{ 
        //     return id=== b.id ? {...b,title :title}: b;
        // })
        // console.log(edited);
        // setBooks(edited);
        axios.put('http://localhost:5000/books/'+id, {title}).then((res)=>{
            setRefresh(!refresh)
           
        })
    }

    return(
    <div style={{border:"3px dashed black", padding:'20px'}}>
         <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>

        <p><textarea onChange={(e)=>setForm({...form, comments: e.target.value})}>{form.comments}</textarea></p>
        <p><select name="category" onChange={(e)=>setForm({...form, comments: e.target.value})}>
            <option>Novel</option>
            <option>Comic</option>
            <option>Fiction</option>
            </select></p>
         <button value="BUY" onClick={(e)=>{
                    //  books.push({id : Math.round(Math.random()*100), title:title})}}
                   addBookHandler();
                }}
             >Add </button>
       {
           books.map((book)=>{
               return <Book key= {book._id} 
                            book={book} 
                             onRemove={()=>{removeBookHandler(book._id)}} 
                            //onRemove={removeBookHandler}
                            onEdit={editBookHandler}>
                                <h1>Book</h1>
                            </Book>
           })
       }
    </div>
    );
}

export default Books;