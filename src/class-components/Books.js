import  React,{Component}  from "react";

import Book from './Book';
import axios from "axios";
import'./books.css';
export  class Books extends Component{
    
    state = {
        books:[],
        title:'',
        category:'',
        publish_date:'',
        cost:'',
        refresh:true,
        filter_category:'',
        highlight:false
    }

    constructor(){
        super();
        this.ref = React.createRef();
    }

    fetchBooks = () => {
        axios.get('http://localhost:5000/books').then((res)=>{
            this.setState({books:res.data});
            console.log(res.data);
        })
    }
    
    componentDidMount(){
        this.fetchBooks();
        this.ref.current.focus();
    }
    
    componentDidUpdate(prevProps,prevState){
        console.log('updating...'+prevState)
        if(prevState.refresh!==this.state.refresh){
            this.fetchBooks();
        }
    }

    addBookHandler = () => {
        // const booksCopy = [...this.state.books, {id : Math.round(Math.random()*100), title:title}];
        // setState({books:booksCopy});

        axios.post('http://localhost:5000/books', {title:this.state.title,category:this.state.category,publish_date:this.state.publish_date,cost:this.state.cost}).then((res)=>{
            this.setState({refresh:!this.state.refresh}) 
        })
        
     
    }

    filterBookHandler= () => {
        console.log(this.state.filter_category)
        axios.get(`http://localhost:5000/books/${this.state.filter_category}`).then((res)=>{
            this.setState({books:res.data});
            console.log(res.data);
        })
    }

    removeBookHandler=(id)=>{
        // console.log("Remove Book:"+id);
        // const booksCopy = [...this.state.books];
        // const filtered = booksCopy.filter((book)=>book.id !== id)
        // console.log(filtered);
        // this.setState({books:filtered});
        axios.delete(`http://localhost:5000/books/${id}`).then((res)=>{
            this.setState({refresh:!this.state.refresh})
        })
    }

    editBookHandler=(id, title,category,publish_date,cost)=>{
        // console.log("Edit Book:"+id+" "+title);
        // const booksCopy = [...this.state.books];
        // //const filtered = booksCopy.filter((book)=>book.id !== id);
        // //const edited = [...filtered,{id:id, title:title}];
        // const edited = booksCopy.map((b)=>{ 
        //     return id === b.id ? {...b,title :title}: b;
        // })
        // console.log(edited);
        // this.setState({books:edited});
        axios.put('http://localhost:5000/books/'+id, {title,category,publish_date,cost}).then((res)=>{
            this.setState({refresh:!this.state.refresh})
        })
        }
    render(){
        return(
            <div className={`common ${this.state.highlight? 'highlight':'light'}`}>
                <button onClick={()=>this.setState({highlight:!this.state.highlight})}>Change Color</button>
                <h2>Title:</h2>
                 <input id='title' type="text" ref={this.ref} value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}}></input>
                <h2>Category: </h2>
                  <p>
                      <select name="category" id="category" onChange={(e)=>this.setState({category: e.target.value})}>
                        <option value="Novel">Novel</option>
                        <option value="Comic">Comic</option>
                        <option value="Fiction">Fiction</option>
                        </select>
                  </p>
                {/* <p><select name="category" onChange={(e)=>setForm({...form, comments: e.target.value})}>
                    <option>Novel</option>
                    <option>Comic</option>
                    <option>Fiction</option>
                    </select></p> */}
                <h2>Publish Date: </h2>
                <input type="text" value={this.state.publish_date} onChange={(e)=>{this.setState({publish_date:e.target.value})}}></input>
                <h2>Cost: </h2>
                <input type="text" value={this.state.cost} onChange={(e)=>{this.setState({cost:e.target.value})}}></input>
                <br></br> <br></br>
                {/* <p><textarea onChange={(e)=>setForm({...form, comments: e.target.value})}>{form.comments}</textarea></p> */}
                
                 <button value="BUY" onClick={(e)=>{
                            //  books.push({id : Math.round(Math.random()*100), title:title})}}
                           this.addBookHandler();
                        }}
                     >Add </button>
                <br></br><br></br>
                <hr></hr>

                    <h2>Filter by Category: </h2>
                    <p>
                        <select name="category" id="category" onChange={(e)=>this.setState({filter_category: e.target.value})}>
                            <option value="Novel">Novel</option>
                            <option value="Comic">Comic</option>
                            <option value="Fiction">Fiction</option>
                            </select>
                    </p>
                    <button value="BUY" onClick={(e)=>{
                            //  books.push({id : Math.round(Math.random()*100), title:title})}}
                           this.filterBookHandler();
                        }}
                     >Filter </button>

                    <button value="BUY" onClick={(e)=>{
                            //  books.push({id : Math.round(Math.random()*100), title:title})}}
                           this.fetchBooks();
                        }}
                     >Go back to Main List </button>
               {
                   this.state.books.map((book)=>{
                       return <Book key= {book._id} 
                                    book={book} 
                                     onRemove={()=>{this.removeBookHandler(book._id)}} 
                                    //onRemove={removeBookHandler}
                                    onEdit={this.editBookHandler}>
                                        <h1>Book</h1>
                                    </Book>
                   })
               }
            </div>
            );
    }

   
}

export default Books;