import logo from './logo.svg';
import './App.css';
import Product from './product';
import Post from './post';
import Books from './Books';

function App() {

  const products =[
    { name:"iphone", price:"75000", qty:"2"},
    { name:"ipad", price:"85000", qty:"1"},
    { name:"ipod", price:"20000", qty:"3"}
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       */}
      {/* {
        products.map((product)=>{
          return <Product key={product.name} name={product.name} price={product.price} qty={product.qty}/>
        })
      } */}
      
      {/* </header> */}
      {/* <Post/> */}
      <Books></Books>
    </div>
  );
}

export default App;
