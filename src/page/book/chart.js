import React , {Component} from 'react'
import * as echarts from 'echarts';
class BookChart extends React.Component{
    componentDidMount() {
        // 绘制图表。
        echarts.init(document.getElementById('main1')).setOption({
            title:{
                text: '上午'
            },
            series: {
                type: 'pie',
                data: [
                    {name: '男', value: 1212},
                    {name: '女', value: 2323}
                ]
            }
        });

        echarts.init(document.getElementById('main2')).setOption({
            title:{
                text: '下午'
            },
            series: {
                type: 'pie',
                data: [
                    {name: '男', value: 2444},
                    {name: '女', value: 2323}
                ]
            }
        });
    }

    render(){
        return (
            <div style={{display:'flex'}}>
                <div id="main1" style={{width: 500, height:500}}></div>
                <div id="main2" style={{width: 500, height:500}}></div>
            </div>
        )
    }
}

export default BookChart