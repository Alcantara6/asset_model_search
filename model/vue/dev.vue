<template>
	<div id="app">
		<div class="extend">
			<strong>Vue.extend</strong>
		</div>
		<div class="el">
			<p>如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译。</p>
			<p>如果 render 函数和 template 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板</p>
			<strong>el选项: 挂载目标</strong>
			<strong>vm.$el: Vue 实例使用的根 DOM 元素</strong>
		</div>
		<div class="new-vue">
			<strong>APP标签时引入的APP组件的html</strong>
			<strong>el: #app</strong>
			<strong>$mount</strong>
			<strong>render</strong>
		</div>
	</div>
</template>

<script>
// 选项对象
var options = {'template': 'xxx'};
// 创建构造器
var Profile = Vue.extend({'template': 'yyy'});
// 创建构造器实例
var profile = new Profile();
// 创建构造器实例并挂载1
var profile = new Profile({el: '#app'});
// 实例挂载2
profile.$mount('#app');
// 在文档之外渲染，随后挂载
profile.$mount();
document.body.appendChild(profile.$el);
// 全局注册组件
Vue.component('what-component', options); 
Vue.component('what-component', profile);
// new Vue 局部注册
new Vue({components: {'what-component', whatComponent}, template: '<App/>', el: '#app'})
new Vue({components: {'what-component', whatComponent}, template: '<App/>'}).$mount('#app');
new Vue({components: {'what-component', whatComponent}, template: '<App/>', render: createElement => createElement(App)});
// watch $route
export default {
    watch: {
    	'$route': {
    		handler(to, from, next) {}
    	}
    }
}
</script>

<style>
	
</style>