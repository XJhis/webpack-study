(function(modules) {
    var cache = {};

    function my_require(moduleId) {
        //如何判断缓存

        if (cache[moduleId]) {
            return cache[moduleId].exports;
        }

        //没有module.exports，那我们就自己造一个；

        var module = cache[moduleId] = {
            id: moduleId,
            loaded:false,
            exports: {}
        }        

        console.log('modules:::', modules);
        

        modules[moduleId].call(module.exports, module, module.exports, my_require);

        module.loaded = true;

        console.log('cache::', cache);
        


        return module.exports;

    }
    
    return my_require('./src/index.js')

})(
    {
        './src/index.js': function (module, exports, my_require) {
            eval("var aa = my_require('./src/a.js');")
        },

        './src/a.js': function (module, exports) {
            eval("var name = '熊炬辉'; module.exports =  name;")
        }
    }
)

//整个是一个自执行函数，
//参数是一个对象, 这个对象中包含了，入口文件，以及入口文件中使用到其他文件中变量
