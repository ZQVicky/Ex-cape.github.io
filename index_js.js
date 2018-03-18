Qfast.add('widgets', { path: "https://hovertree.com/texiao/js/1/js/terminator2.2.min.js", type: "js", requires: ['fx'] });
Qfast(false, 'widgets', function () {
    K.tabs({
        id: 'decoroll2', //焦点图包裹id
        conId: "decoimg_a2", //大图域包裹id
        tabId: "deconum2", //小圆点数字提示id
        tabTn: "a",
        conCn: '.decoimg_b2', //大图域配置class
        auto: 1, //自动播放 1或0
        effect: 'fade', //效果配置
        eType: 'mouseover', // 鼠标事件
        pageBt: true, //是否有按钮切换页码
        bns: ['.prev', '.next'], //前后按钮配置class
        interval: 3000// 停顿时间
    })
})
