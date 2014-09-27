/**
 *
 * @authors     Damon
 * @date        2014-01-03 09:00:55
 * @description 配置第三方类库
 */

seajs.config({
    // base: '/slider',
    alias: {
        'jquery'        : '/slider/lib/jquery-1.10.2.js',
        'jquery-easing' : '/slider/lib/jquery-easing-1.3.js',
        'tools'         : '/slider/src/tools.js',
        'slider'        : '/slider/src/slider-sea.js'
    },
    preload:[
        'jquery'
    ]
});