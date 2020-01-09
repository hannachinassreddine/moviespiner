import React from 'react'
import Test2 from './test2'

class test extends React.Component{
 state={
     char:'hello world!'
 }
 handelchanges=(e)=>{
     this.setState({
         char:e.target.value
     })
 }
 render (){return(<div>
    <Test2 onchangechar={this.handelchanges} charset={this.state.char}/>
        <span>{this.state.char}</span>
    </div>
    )
 }
}
export default test