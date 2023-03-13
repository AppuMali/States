import React,{Component} from 'react'

class StateApp extends Component
{
    constructor()
    {
        super()
        this.state = {
            username : "Appu"
        }
    }
    render()
    {
        return(
            <h1>{this.state.username}</h1>
        )
    }
}
export default StateApp