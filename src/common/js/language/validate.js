import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'


const config = {
  errorBagName: 'errorBags', // change if property conflicts.
  fieldsBagName: 'fieldBags',
};
Vue.use(VeeValidate, config);


Validator.localize(Validator.locale,{
  messages: {
    required: ( field )=> field  + "  is required"
  },
  attributes:{
     loginId:'Login ID',
     loginPwd:'Password'
  }
});

Validator.extend('amt', {
  getMessage: ()=>  "Incorrect Amount Input Format",
  validate: value => {
    return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value);
  }
});



// 自定义validate
// const dictionary = {
//   zh_CN: {
//     messages: {
//       email: () => '请输入正确的邮箱格式',
//       required: ( field )=> "请输入" + field
//     },
//     attributes:{
//       email:'邮箱',
//       password:'密码',
//       userName: '账号',
//       phone: '手机'
//     }
//   }
// };
//
// Validator.updateDictionary(dictionary);
