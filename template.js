//一：这是一个自执行函数，
// 该函数传参modules为一个对象，对象的key为需要打包的js文件的路径，value为各个js文件中的代码

(function (modules) {

    //缓冲模块的对象，用来存储已经加载过得模块
    var installedModules = {};

    //核心方法：加载
    function __webpack_require__(moduleId) {

        //先判断缓冲对象中有没有
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }

        //如果没有则给其定义一个模块对象
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        //使用call改变js文件中的this指向，让其指向每个文件的模块对象的module.exports
        //__webpack_require__这个参数不一一定有效，具体看modules[moduleId]中有没有接收这个参数
        
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        //loaded已经加载完毕
        module.l = true;

        return module.exports;
    }

    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };

    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";


    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})

({

    "./src/a.js": //入口文件中引入的js相对路径

        (function (module, exports) {

            eval("var name = 'xjh';\r\n\r\nmodule.exports = name;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/a.js?");

        }),

    "./src/index.js": //这个是入口文件的相对路径

        (function (module, exports, __webpack_require__) {

            eval("var name = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\r\n// var name = require('./a.js');\r\n\r\nconsole.log(name);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

        })

});


