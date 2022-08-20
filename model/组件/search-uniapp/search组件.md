参考：(uni-app插件市场)[https://ext.dcloud.net.cn/plugin?id=91] 源码很垃圾，主要参考其实现功能
## search组件实现的功能：
1. isFocus变量控制input的focus属性
2. 如果没有输入，搜索时用placeholder搜索，点击搜索后placeholder值转为input的value
3. 搜索按钮：搜索或取消，或点击关闭icon取消输入
4. 清除输入时，uni.hideKeyboard()，this.$emit('input', '');
5. 动态搜索keywordList，选中后更新input的value
6. storage的keyword: 最多10个，不能重复，新加入的都在最前面。getStorage如果fail毁掉，则把当前的keywords全部存入storage
