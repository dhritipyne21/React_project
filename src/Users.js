import {Component} from 'react'
import UserInfo from './UserInfo'

export  class Users extends Component{
    users=['Cinderella','Tinkerbell']
    state={
        users:['Cinderella','Tinkerbell']
    }

    userSelectHandler(){
        console.log('User select called')
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps,prevState){

    }

    componentWillUnmount(){

    }

    render(){
        return <div>
            {
                //<UserInfo></UserInfo>
                this.state.users.map(b=><UserInfo name ={b} 
                    onSelectItem={this.userSelectHandler}>

                    </UserInfo>)
            }
        </div>
    }
}

export default Users;