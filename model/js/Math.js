// Math.ceil(), Math.floor()方法，Math.round方法
//random()方法    0≤x<1
//值=Math.floor(Math.random()*可能只的总数+第一个可能的值)

function selectForm(lowerValue,upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random()*choices + lowerValue);
}
var num = selectForm(2,10);
alert(num);

var colors = ["red","green","blue","yellow","black","white","purple"];
var color = colors[selectForm(0,colors.length-1)];
alert(color);
