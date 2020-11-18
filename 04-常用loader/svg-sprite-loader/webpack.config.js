/* webpack.config.js

 */

const path = require('path');

// 0.3.0版本的写法
const config = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader?' + JSON.stringify({
                    name: '[name]',
                    prefixize: true
                })
            }
        ]
    }
};

// 2.x写法
// const config = {
//     entry: './src/entry.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.svg$/,
//                 loader: 'svg-sprite-loader',
//                 options: {
//                     runtimeCompat: true
//                 }
//             }
//         ]
//     }
// };

module.exports = config;




