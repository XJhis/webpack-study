module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        //其实有三个地方可以配置兼容浏览器的版本，
        //1:package.json中的browserlist: 配置，如下：
        /**
         * "browserslist": [
              "> 1%",
              "last 2 versions",
              "not ie <= 9"
            ]
         */

        //2:在.browserslistrc文件中配置
        /**
         * > 1%
            last 2 versions
            not <= 9
            not dead
         */

        //3:在babel.config.js(babel.config.json)中配置，如下：
        /**
         * "targets": [
            'last 2 chrome versions',
            
          ],
         */
        
        "targets": [
          'last 2 chrome versions',
          
        ],
        "useBuiltIns": "usage",
      }
    ]
  ]
}