import  React,{Component}  from "react";
import { CurrUserContext } from "./App";
import Product from './Product';
import axios from "axios";
//import'./books.css';
export  class Products extends Component{
    
    state = {
        Products:[
            {id:1, Product:'Harry Potter', Cost:750},
            {id:2, Product:'Sherlock Holmes', Cost:350},
            {id:3, Product:'Nancy Drew', Cost:99}
        ]
    }

  
    render(){
        return (<CurrUserContext.Consumer>
            {
                (value) =>{
                    return (<div>
                        {/* <h1>Class Component:    {value.name}</h1>
                        <p>Message: {this.props.msg}</p> */}
                        {/* <div className={`${value.theme} ${this.state.highlight? 'highlight':'light'}`}> */}
                        <div className={`common ${value.theme}`}>
                        {
                            this.state.Products.map((product)=>{
                                return <Product key= {product.id} 
                                                product={product}>
                                                    <h1>Book</h1>
                                                </Product>
                            })
                        }
                        </div>
                    </div>)
                }
            }
        </CurrUserContext.Consumer>
        )
       
    }

   
}

export default Products;