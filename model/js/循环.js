// 【例子：循环调用找匹配的子字符串】//运用indexOf(str,pos).运用while
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1) {
	positions.push(pos);
	pos = stringValue.indexOf("e", pos+1);
}
alert(positions);  

for (var c = active_control; c; c = c.parent()) {
	if (c instanceof controls.canvas_content) {
		return c;
	}
}