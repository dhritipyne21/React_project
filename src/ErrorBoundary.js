import { Component } from "react";

export default class ErrorBoundary extends Component{
    state={
        error: false,
        message:''
    }
    componentDidCatch(error,errorInfo){
        console.log(error)
        if(error)
        {
            this.setState({error:true,message:errorInfo})
        }
    }
    render(){
        return(this.state.error?<div>Sorry!!{this.state.errorInfo}</div>:this.props.children)
    }
}