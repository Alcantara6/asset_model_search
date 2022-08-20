/**
 * API 世界杯、周年庆
 */
const _api=env.prod
?"https://ylc.hx168.com.cn/ylcgate/api/v2.0"
:"http://wxtest.hx168.com.cn/ylcgate/api/v2.0"

const _agree=env.prod
?"https://ylc.hx168.com.cn/ylc/servlet/json?funcNo=1000156&contract_type=reg_agreement&is_query_content=1"
:"http://wxtest.hx168.com.cn/ylc/servlet/json?funcNo=1000156&contract_type=reg_agreement&is_query_content=1"

const _ycfActivity=env.prod
?"http://wx.hx168.com.cn/ycf/815/review/index.html#/"
:"http://wxtest.hx168.com.cn/ycf/815/review/index.html"

const _share_api=env.prod
?"https://wx.hx168.com.cn/weichat/weichat/share/abb545b57b9926125eb9b7c1978b69d57f1084f9"
:"http://wxtest.hx168.com.cn/weichat/weichat/share/53495cb4c31684f5a12ed89c14856af8f10edc1d"

// APP分享中转页面
const _app_share=env.prod  
?"https://ylc.hx168.com.cn/ylcgate/api/v2.0/activity/share/wei30"
:"http://wxtest.hx168.com.cn/ylcgate/api/v2.0/activity/share/wei30"


/**
 * 小程序
 */
// 此处主机域名修改成腾讯云解决方案分配的域名
const host = 'https://info.hx168.com.cn/o2o/api/v1.0';
const gatehost="https://ylc.hx168.com.cn/ylcgate/api/v2.0";
// 测试环境
const host = 'http://10.33.4.187:18898/api/v1.0';
const host = "https://kftest.hx168.com.cn/hxo2o/api/v1.0";
const gatehost = "https://kftest.hx168.com.cn/ylcgate/api/v2.0";
var dev = {
    'kftest ip': 'http://10.33.4.187:18898/api/v1.0/user/weixin/testcc?mobilePhone=15928532271&tdsourcetag=s_pctim_aiomsg'
}

export let API = {
    // 网关基本api
    api:_api
}

/**
 * 开户
 */
var account = {
     // 股票开户
     stockKh:"https://kh.hx168.com.cn/v3/h5/sjkh/open/index.html#!/business/index.html",
     // H5理财开户
     finanKh:"http://kh.hx168.com.cn/v3/h5/lckh/openAccount/views/account/index.html?open_source=business&open_channel=YLC_YQB"
}

/**
 * 登录 auth
 */
params["mobile"]=this.mobile
params["vcode"]=this.vcode
let _loginParams={
    "identityType": 15,
    "identifier": args.params["mobile"],
    "credential": args.params["vcode"],
    // 添加pageId，区分用户注册渠道
    "pageId": config.activityGroup,
    ...path.getPathParams(),
    "source":2,  // 益理财为2
    "ext1":window.global["forward_id"] || ""  // forward_id
}
// 实际
{
    identityType:15,
    identifier:13038284750,
    credential:569666,
    channel:'ylcapp30',
    source:2,
    ext1: ''
}


=====================================================================================================================
/**
 * 登录信息获取   H5: /login/userinfo
 */
const _tokenCookie = "_eu_cookie_"
const getters={}
// 周年庆益理财登录信息获取（带token验证）
getters[constants.ylc]=function(){
    let _params={
        funcNo:"50043",
        key:_tokenCookie
    }
    let _cookie=call.callMessage(_params)
    if(_cookie && typeof(_cookie)=="string"){
        _cookie=_cookie.replace(_token+"=","")
        console.log("get ylc token:"+_cookie)
        return _cookie
    }
    return ""
}
// 周年庆赢财富登录信息获取（带token验证）
getters[constants.ycf]=function(){    // token和user_info在一起
    let _params={
        funcNo:"50041",
        moduleName:"ycf",
        targetModule:'common',
        key:"sso_user_info"
    }
    let _data=call.callMessage(_params)
    if(_data){
        let _cookie=_data["cookie"] || ""
        _cookie=_cookie.replace(_token+"=","")
        console.log("get ycf token:"+_cookie)
        return _cookie
    }
    return ""
}

// 周年庆H5获取登录信息——用户信息，带cookie请求（cookie应为上一次登录存入的）
this._vm.$get(config.loginUserInfo,null,function(data){  // 带浏览器cookie
    _callback(data)

// 世界杯H5获取登录信息
// H5  initUse，从cookie获取，完成后存入（cookie应为上一次登录存入的）  login/userinfo
mounted(){ 
    this.initUser();
    initUser({commit,state}){
        let _vm=this._vm
        let _callback=function(){
            // 从cookie获取
            let user=utility.getCookie(config.token)
            if(user!=""){
                try{
                    user=JSON.parse(user)
                }catch(err){
                    user=null
                }
            }
            commit('setUser',user)
            console.log("init user=>"+JSON.stringify(user))
        }
        userapi.getUser(null,function(data){
            if(data && data.rscode && data.rscode==0 && data.results && data.results.length>0){
                let _eno=data.results[0]
                // 设置cookie,与auths中一样
                utility.setCookie(config.token,JSON.stringify(_eno),config.expires())
                _callback()
            }else{
                utility.setCookie(config.token,JSON.stringify({}),-1*config.expires())
            }
        })
    }
}
const getters={
    user: state => {
        // 从cookie获取
        let user=utility.getCookie(config.token)
        try{
            user=JSON.parse(user)
        }catch(err){
            user=null
        }
        if(user==null){
            state.user=null
        }
        return state.user
    }
}   
// 大吉大利 益理财登录信息获取
function getAppCookie(){
    var result = callMessageNative({funcNo:"50043",key:"cookie"});
    var cookie =  (result && result.results && result.results[0]  && result.results[0].value) ? result.results[0].value : '';
    if(cookie == "null" || !cookie){
        cookie = "";
    }else{
        cookie = cookie.replace(/\__token\__\=|\;path\=\//gi,'');
    }
    return cookie;
}
// 大吉大利 H5登录信息获取
function getCookie(name) {
    var reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
    var values = reg.exec(document.cookie);
    if(values && values.length) {
        return window.decodeURIComponent(window.atob(values[2]));
    }
    else {
        return '';
    }
}

=====================================================================================================================
/**
 * 登录写进壳子   H5: /login/auths
 */
// 周年庆益理财登录回调，保存token和一户通信息
// token标识
const _token = "__token__"
const token = "eno_token"
const _tokenCookie = "_eu_cookie_"

login_actions[constants.ylc]=function(userInfo){
    // _eu_info_写
    let _userInvokeParams={
        "funcNo":"50042",
        "key":"_eu_info_",
        "value":JSON.stringify(userInfo)
    }
    call.callMessage(_userInvokeParams)
    // _eu_info_读
    let __userInvokeParams={
        "funcNo":"50043",
        "key":"_eu_info_"
    }
    call.callMessage(__userInvokeParams)
    // _eu_cookie_写    userInfo['__token__']
    let _userCookieParams={
        "funcNo":"50042",
        "key":_tokenCookie,
        "value":_token+"="+userInfo[_token] || ""
    }
    call.callMessage(_userCookieParams)
    // _eu_cookie_读
    let __userCookieParams={
        "funcNo":"50043",
        "key":_tokenCookie
    }
    call.callMessage(__userCookieParams)
    // sso.euser_info写  一户通信息userInfo
    var _einfos = {
        "funcNo":"50042",
        key: "sso.euser_info",
        value:userInfo, isEncrypt: 1 
    };
    call.callMessage(_einfos);
}

// 周年庆H5写入cookie   只有loginUseInfo
// （1）这是进入时获取的，周年庆H5获取登录信息——用户信息，带cookie请求（cookie应为上一次登录存入的），如果没有cookie就请求不到
this._vm.$get(config.loginUserInfo,null,function(data){  // 带浏览器cookie
    _callback(data)
})
// （2）这是进入时发现没登录，活动页面内登录  只有auth. /login/auths
this.auths({params:params,callback:function(data){}
commit("setUser",data.results[0])

// 大吉大利益理财写进壳子， 保存token和一户通信息到壳子
function saveUserInfo (userInfo) {
    callMessageNative({
        funcNo: "50042",
        key: "sso.euser_info",   // 写一户通信息！
        value: userInfo, 
        isEncrypt: 1
    });
    callMessageNative({
        funcNo: "50042",
        "key": "cookie",        // 写token
        "value": document.cookie
    });
}
// 大吉大利H5保存登录信息
function setCookie(name,value,expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires);
    var cookieVal = window.btoa(window.encodeURIComponent(value));  // btoa === Base64.encode
    document.cookie = name + '=' + cookieVal + '; domain=' + document.domain + '; path=/; expires=' + d.toUTCString();
}