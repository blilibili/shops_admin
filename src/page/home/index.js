import React , { Component} from 'react'

class ContentIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <button onClick={e => {console.log(this)}}>测试</button>
            </div>
        )
    }
}

export default ContentIndex
