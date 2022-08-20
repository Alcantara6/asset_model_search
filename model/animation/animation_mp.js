var setTranslateAnimation = (x,y, opc = 1, dur = 500, func = 'ease') => {
    let ani = wx.createAnimation({
        duration: dur,
        timingFunction: 'ease'
    });
    ani.translate(x,y).opacity(opc).step();
    return ani.export();
}
var setHeightAnimation = (h, dur = 500, func = 'ease') => {
    let ani = wx.createAnimation({
        duration: dur,
        timingFunction: 'ease-out'
    });
    ani.height(h+'rpx').step();
    return ani.export();
}

module.exports = {setTranslateAnimation, setHeightAnimation};