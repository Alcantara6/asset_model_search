module.exports = {
	loginOpt: {
	    type: 'login',
	    opc: 0.5,
	    title: '身份验证',
	    text: '客户使用的小程序版本',
	    form: {
	    	login: {
	    		phone_icon:'',
	    		pwd_icon: '',
	    		agreement: ''
	    	},
            radio: null
	    },
	    buttons: [
	        {
	            btnType: 'submit',
	            btnText: '立即登录',
	            bgc: '#cbaf79',
	            action: 'login',
	            next: []
	        }
	    ]
	}
}