// 设置图片裁剪
if (imgInfo) {
    let [sx, sy, sWidth, sHeight] = [0, 0, 0, 0];
    if (imgInfo.width/imgInfo.height - 4/5 > 0) {
        sWidth = imgInfo.height*5/4;
        sHeight = imgInfo.height;
        sx = (imgInfo.width - sWidth)/2;
        sy = 0;
    }
    else {
        sWidth = imgInfo.width;
        sHeight = imgInfo.width*4/5;
        sx = 0;
        sy = 0;
    }
    ctx.drawImage(imgInfo.path, sx, sy, sWidth, sHeight, canvasPd, canvasPd*1.5, canvasImgW, canvasImgH);
}