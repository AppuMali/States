import React,{Component} from 'react'

class StateApp1 extends Component
{
   state = {
    username : "Appu"
   }
    render()
    {
        return(
           <>
           <h1>{this.state.username}</h1>
           </>
        )
    }
}
export default StateApp1