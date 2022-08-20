1. hidden的view标签，宽度 = 要求的最大宽度
2. selectedValues遍历，每添加一项，计算宽度
3. 如果宽度 > 最大宽度，则上一项加换行符。 清空view标签，把这项加入view标签
4. 循环直接结束