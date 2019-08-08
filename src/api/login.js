/**
 * Created by gy on 2018/5/22.
 */
import axios from 'axios'
import {serverUrl, API_FAILED} from './config'
import {baseUrl} from '../common/env'



export function getLogin(str, p) {
  // const url = serverUrl.api+"/"+str;
  console.log("-------------env url---------------:" + baseUrl);
  const url = baseUrl +'api/'+ str
  //serverUrl.req.param = p;

  return axios({
    method: 'post',
    url: url,
    params: p
  }).then((res) => {
    //return  Promise.resolve(res.data);
    console.log("--------getLogin-----------"+res.data)
      let _obj = {
          retCode: "",
          retMsg: "",
          authorization:"",
          result: {}
      }
      _obj.retCode = res.data.retCode
      _obj.retMsg= res.data.retMsg
      _obj.authorization= res.data.authorization
      _obj.result = res.data
      return _obj;
  }).catch((res) => {
    return API_FAILED
  })
}
