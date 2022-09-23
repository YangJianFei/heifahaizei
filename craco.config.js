/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Monday, June 27th 2022, 4:10:01 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');
const config = require('./env.ts');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: config.target,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
    },
    // antd 按需引入样式
    babel: {
        plugins: [
            [
                "import", // 要做按需引入，所以是import
                {
                    "libraryName": "antd", // 表示要做antd的按需引入
                    "libraryDirectory": "es",// antd用es的模块化规范
                    "style": true //设置为true即是less
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#673ab7' },
                        javascriptEnabled: true,
                    },
                },
                // cssLoaderOptions: {
                //     modules: { localIdentName: "[local]_[hash:base64:5]" },
                // }
            },
        },
    ],
    webpack: {
        alias: {
            '@': resolve("src"),
            'components': resolve("src/components"),
            'pages': resolve("src/pages"),
            'utils': resolve("src/utils"),
            'api': resolve("src/api"),
            'reduce': resolve("src/reduce")
        },
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = 'docs';
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve('docs'),
                publicPath: './'
            }
            if (env == 'production') {
                webpackConfig.devtool = false;
            }
            return webpackConfig;
        }
    }
};
