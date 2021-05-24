import { useContext} from "react"
import { CurrUserContext } from "./App"
import withHOC from "./withHOC"

const SampleFunctionComponent = (props) => {
    const value=useContext(CurrUserContext)
    return <div>
        <h1>Function Component:    {value.name}</h1>
        <p>Message: {props.msg}</p>
    </div>
}

export default withHOC(SampleFunctionComponent)