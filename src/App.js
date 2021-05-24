import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Post from './post';
import Books from './class-components/Books';
import HttpExample from './HttpExample';
import React,{ Component, useState } from 'react';
import { Users } from './Users';
import SampleClassComponent from './SampleClassComponent';
import SampleFunctionComponent from './SampleFunctionComponent';
import ErrorBoundary from './ErrorBoundary';
import {Link,Route,BrowserRouter,Switch, useHistory} from 'react-router-dom';

//export const CurrUserContext = React.createContext({name:'John'})
export const CurrUserContext = React.createContext({theme:'light_theme'})
//import Users from './Users';

function App() {

  const [name,setName]=useState('')

  const [some,setSome]=useState(true)
    
  const [theme,setTheme]=useState('light_theme')

  const products =[
    { name:"iphone", price:"75000", qty:"2"},
    { name:"ipad", price:"85000", qty:"1"},
    { name:"ipod", price:"20000", qty:"3"}
  ]
  return (
    <BrowserRouter>
    <div className="App">
      
    <p>
      <h2>Choose Theme:   </h2>
        <select name="theme" id="theme" onChange={(e)=>setTheme(e.target.value)}>
            <option value="light_theme">Light Theme</option>
            <option value="dark_theme">Dark Theme</option>
        </select>
    </p>
  
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={
          {
            pathname:'/products',
            state:{category:'Furn'}
          }
        }>Products</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/products' component={Product}>
          <Product/>
        </Route>
        <Route path='/users' component={User}>
          <User/>
        </Route>
      </Switch> */}
      {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input> */}
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
      {/* <Books></Books> */}
      {/* <CurrUserContext.Provider value={{name}}>
        <ErrorBoundary>
        <SampleClassComponent msg='Hi Class'></SampleClassComponent>
        
        <SampleFunctionComponent msg='Hi Function'></SampleFunctionComponent>
        </ErrorBoundary>
      </CurrUserContext.Provider> */}
      <CurrUserContext.Provider value={{theme}}>
      <Products></Products>
      </CurrUserContext.Provider>
     
      {/* <Users></Users> */}
      {/* <button onClick={()=>setSome(!some)}>Toggle</button>
      <HttpExample test={some}></HttpExample> */}
    </div>
    </BrowserRouter>
  );
}

const Home = (props) => {
  return <div>Home</div>
}

const Product = (props) => {
  console.log(props.match.params.name)
  let history = useHistory()
  return <div>Products</div>
}

class User extends Component{
  render(){
    console.log(this.props)
  return <div>Users</div>
  }
} 

export default App;
