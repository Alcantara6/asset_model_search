var A = {
	foo: 'bar',
    checked: 'false',
	loginUser: true,
	items: [
        {name: 'a', id: 1},
        {name: 'b', id: 2}
	],
	comObj: {
		foo: 'b1',
		bar: 'b2'
	}
}
// 局部注册
var childPartial = {
	props: ['foo', 'bar'],
	template: `<div>{{ foo }} -- {{ bar }}</div>`
};

// 全局注册：必须在初始化根实例之前注册组件，语法糖，背后自动调用Vue.extend()
Vue.component('child', {
	props: ['myObj'],
	template: `<div>
                   <div v-for="(value,key) in myObj">{{ key }},{{ value }}</div>
               </div>`
})

// Vue3.x
var vm = Vue.createApp(/* 选项 */).mount('#app');
// Vue2.x
var vm = new Vue({
    el: '#example',
    data() {
    	return A;
	},
	components: {
        'child-partial': childPartial
	},
    computed: {
    	fullName: {
    		get() {
    			return firstName + lastName;
    		},
    		set(newVal) {
    			// setter
    		}
    	}
    },
    watch: {
        question(newQuestion, oldQuestion) {
            // deep，immediate
            // API中有更多用法
        }
    },
    methods: {
    	protoEvent(message, e) {
    		console.log(message, e.target);
    	}
    }
});
vm.$data === function () {return A}
vm.$el = document.getElementById('example');
vm.$watch('foo', function () {newVal, oldVal});

console.log('不要在选项属性和回调上使用箭头函数');
console.log('对象语法结合计算对象，v-bind:class, v-bind:style');
console.log('v-show不支持<template>和v-else');
console.log('确保在初始化根实例之前注册组件，即不能在new Vue')