// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import InsideTable from './component/insideTable'
const Option = Select.Option;
class InsideIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rangeValue: ''
        }
    }
    onChangeRange = (val) => {
        this.setState({
            rangeValue: val
        })
    }
    render() {
        const { rangeValue } = this.state;
        return (
            <div className='book-list-page'>
                <div className='title-controller'>
                    <div>
                        站内信
                    </div>
                    <div className="mu-controller">

                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                <InsideTable></InsideTable>
            </div>
        )
    }
}

export default InsideIndex
