import React from 'react'

class test2 extends React.Component{

    render(){
        return(
            <div>
                <input onChange={this.props.onchangechar} value={this.props.charset}/>
            </div>
        )
    }
}
export default test2