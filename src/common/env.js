/*
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 */
let baseUrl = '';
let DEBUG = false;
if (process.env.NODE_ENV === 'unit') {
    baseUrl = "http://192.168.0.110:8080/passport/";
    DEBUG = true;
} else if (process.env.NODE_ENV === 'sit') {
    baseUrl = "http://192.168.0.111:8080/passport/";
    DEBUG = false;
} else if (process.env.NODE_ENV === 'pre') {
    baseUrl = "https://www.asiapbx.com/passport/";
    DEBUG = false;
} else if (process.env.NODE_ENV === 'demo') {
    baseUrl = "http://192.168.0.113:8180/pbx-buyer-reg-web/";
    DEBUG = false;
} else if (process.env.NODE_ENV === 'uat') {
    baseUrl = 'http://pbxuat.myddns.me:9988/passport/'
    DEBUG = false;
} else if (process.env.NODE_ENV === 'prod') {
    baseUrl = "https://pbx.pracbiz.com/pbx-buyer-reg-web/";
    DEBUG = false;
} else if (process.env.NODE_ENV === 'pro') {
    baseUrl = "https://www.asiapbx.com/passport/";
    DEBUG = false;
} else if (process.env.NODE_ENV === 'development') {
    baseUrl = "http://192.168.0.110:8080/passport/";
    DEBUG = true;
}

export {
    baseUrl,
    DEBUG
}
