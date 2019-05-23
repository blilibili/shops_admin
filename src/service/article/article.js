import axios from 'axios'
import global from '../global'
import {Notify} from 'zent'

export function requestGetArticleList(){
    return new Promise((resolve , reject) => {
        axios.get(global.website + `/api/article/getlist`)
            .then(res => {
                if(res.data.state == 200){
                    resolve(res.data.data)
                }else{
                    Notify.error(res.data.msg)
                }
        })
    })
}


export function requestGetArticleTags(){
    return new Promise((resolve , reject) => {
        axios.get(global.website + `/api/article/getcategory`)
            .then(res => {
                if(res.data.state == 200){
                    resolve(res.data.data)
                }else{
                    Notify.error(res.data.msg)
                }
            })
    })
}
