import {useState} from 'react'
import Book from './Book';

const Books = ()=>{
    const [books,setBooks] = useState(
        [
          // {id:1, title:'ABC'} , {id:1, title:'XYZ'} 
        ]
    )
    
    const [title,setTitle]= useState('')

    const removeBookHandler=(id)=>{
        console.log("Remove Book:"+id);
        const booksCopy = [...books];
        const filtered = booksCopy.filter((book)=>book.id !== id)
        setBooks(filtered);
    }

    const editBookHandler=(id, title)=>{
        console.log("Edit Book:"+id+" "+title);
        const booksCopy = [...books];
        const filtered = booksCopy.filter((book)=>book.id !== id);
        const edited = [...filtered,{id:id, title:title}];
        console.log(edited);
        setBooks(edited);
    }

    return(
    <div style={{border:"3px dashed black", padding:'20px'}}>
         <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
         <button value="BUY" onClick={(e)=>{
                    //  books.push({id : Math.round(Math.random()*100), title:title})}}
                    const booksCopy = [...books, {id : Math.round(Math.random()*100), title:title}];
                    setBooks(booksCopy);
                }}
             >Add 
        </button>
       {
           books.map((book)=>{
               return <Book key= {book.id} 
                            book={book} 
                            // onRemove={()=>{removeBookHandler(book.id)}} 
                            onRemove={removeBookHandler}
                            onEdit={editBookHandler}></Book>
           })
       }
    </div>
    );
}

export default Books;