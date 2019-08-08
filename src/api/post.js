/**
 * Created by gy on 2018/5/22.
 */
import axios from 'axios'
import {serverUrl,API_FAILED} from './config'
import {baseUrl} from '../common/env'


import {getCookie} from '../common/js/util/util'



export  function post(str,p){

  const url = baseUrl+'api/' + str;
  //serverUrl.req.param = p;

  var authorization = getCookie('authorization'); //获取Cookie

  var instance = axios.create({
    baseURL: url,
    method: "post",
    headers: {'authorization': authorization}
  });



  return  instance({
    method: 'post',
    url:url,
    params: p
  }).then((res)=>{
     //return  Promise.resolve(res.data);
      console.log("--------post-----------"+res.data)
      let _obj = {
          retCode: "",
          retMsg: "",
          result: {}
      }
      _obj.retCode = res.data.retCode
      _obj.retMsg= res.data.retMsg
      _obj.result = res.data
      return _obj;
  }).catch((res)=>{
       return API_FAILED
  })
}
