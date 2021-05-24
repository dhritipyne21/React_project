import {Component} from 'react'

export  class UserInfo extends Component{
  

    render(){
        return <h1 onClick={()=>this.props.onSelectItem()}>{this.props.name}</h1>
    }
}

export default UserInfo;

//setState({name:'Bella'})
//const copyUsers=[this.state.users]
