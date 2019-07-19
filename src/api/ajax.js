/*
ajax请求函数模块
返回值是promise对象
 */
import axios from "axios"
export default function ajax(url,data={},type="get") {
    //接收函数的函数，高阶函数
    return new Promise(function (resolve,reject) {
      //执行异步ajax请求
      let promise
      if(type==="GET"){
        //准备url query参数数据
        let dataStr=""
        Object.keys(data.forEach(key=>{
          dataStr+=key+"="+data[key]+"&"
        }))
      }
      if(dataStr!==""){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf("&"))
        url=url+"?"+dataStr
        promise=axios.get(url)
      }else {
        //发送POST请求
        promise=axios.post(url,data)
      }
      promise.then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    })
  
}
