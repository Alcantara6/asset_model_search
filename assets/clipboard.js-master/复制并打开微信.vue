<template>
    <div class="guid-wrapper">
		<div class="logo"></div>
		<div class="title">
			<img src="../assets/img/guide_title.png"/>
		</div>
		<div class="guid-inner">
			<div class="guid-title">第一步</div>
			<div class="guid-input">在微信中关注“{{this.$hx.weiWeiXin}}”公众号</div>
			<div class="guid-code">
				<img src="../assets/img/guide-step01.png"/>
			</div>
			<div class="guid-title">第二步</div>
			<div class="guid-input">在公众号的对话框内回复您的手机号</div>
			<div class="guid-code">
				<img src="../assets/img/phone-input.png"/>
			</div>
			<div class="guid-title">第三步</div>
			<div class="guid-input">点击链接，参与您的专属活动，领取好礼</div>
			<div class="guid-img">
				<img src="../assets/img/guide-icons.png"/>
			</div>
			<a class="guid-btn track" id="openWeiXin" @click="copy">复制公众号名称并打开微信</a>
			<a :href="this.$hx.weixin" ref="real"></a>
		</div>
		<div class="footer"><span>{{this.$hx.risk}}</span></div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import {env} from '../../src/util'
export default {
    data(){
		return{
			guidCode:''
		}
	},
	mounted(){
		this.guidCode=this.$route.query.code
		if(this.guidCode){
			this.sms(this.guidCode)
		}
	},
	methods:{
		...mapActions(['sms']),
		copy(){
			let _self=this
			var clipboard = new ClipboardJS("#openWeiXin",{
				text: function() {
					return _self.$hx.weiWeiXin
				}
			})
			clipboard.on("success",function(){
				_self.$toast("复制成功")
				_self.$refs.real.click()
			})
			clipboard.on("error",function(){
				_self.$toast("请手动复制")
			})
		}
	}
}
</script>
<style lang="scss">
	.guid-wrapper{
		position: relative;
		width:100%;
		height:100%;
		background:#FFFAF5 url('../assets/img/guide-bg.png') no-repeat top;
		background-size:contain;
		.logo{
			width:173px;
			height:46px;
			position:absolute;top:40px;
			left:50%;margin-left:-86.5px;
			background:transparent url('../assets/img/logo.png') no-repeat top;
			background-size:100%;
		}
		.title{
			position:absolute;
			top:113px;
			width:100%;
			line-height:1;
			text-align:center;
			img{
				width:357px;
				height:58px;
			}
		}
		.guid-inner{
			width:716.67px;
			height:890px;
			position:absolute;
			top:50%;
			transform:translateY(-50%);
			background:transparent url('../assets/img/guide-inner.png') no-repeat center;
			background-size:100%;
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			font-size:26px;
			*{line-height:1;}
			.guid-title{
				margin-top:25px;
				font-size:23px;
				color:#444444;
				background:rgba(231,208,176,1);
				padding:5px 10px;
				border-radius:17px;
				&:first-child{
					margin-top:-40px;
				}
			}
			.guid-name{
				color:#B06D37;
				font-size:48px;
				margin-top:20px;
				margin-top:30px;
				em{
					font-size:20px;
					color:#916745;
					margin-left:10px;
					font-style:normal;
				}
			}
			.guid--input{
				position:absolute;top:-500px;
			}
			.guid-input{
				margin:15px 0px;
				color:#666666;
				font-size:24px;
			}
			.guid-code{
				font-size:36px;
				color:#3A3A3A;
				text-align:center;
				img{
					max-width:60%;
				}
			}
			.guid-img{
				text-align:center;
				img{
					max-width:60%;
				}
			}
			.guid-btn{
				background:#ff0000;
				width:400px;
				color:#ffffff;
				font-size:27px;
				display:flex;
				justify-content:center;
				align-items:center;
				margin-top:20px;
				height:67px;
				background:linear-gradient(0deg,rgba(195,57,57,1),rgba(228,100,88,1));
				box-shadow:0px 3px 13px 0px rgba(5,0,1,0.2);
				border-radius:33px;
			}
		}
		.footer{
			height:170px;
			background:transparent url('../assets/img/guid-footer.png') no-repeat bottom;
			background-size:100%;
			font-size:24px;
			color:#916745;
			position: absolute;
			bottom:0px;
			width:100%;
			span{
				position:absolute;
				bottom:0px;
				bottom:20px;
				left:50%;
				transform:translateX(-50%);
			}
		}
	}
</style>