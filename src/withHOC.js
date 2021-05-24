import { Component } from "react"

const withHOC = (WrappedComponent) => {
    console.log('Inside wrapping component ')
    // return (props) => {
    //     console.log('Inside returning component')
    //     return (
            
    //         <div>
    //             <h3>Wrapping Inside Component:   </h3>
    //             <WrappedComponent{...props}/>
    //         </div>
    //     )
    // }
    return class extends Component{
        render(){
            return <WrappedComponent{...this.props}/>
        }
    }
}

export default withHOC