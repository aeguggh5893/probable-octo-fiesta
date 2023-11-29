const path = require('path');

module.exports = {
<<<<<<< HEAD
=======
    mode: 'development',
>>>>>>> day1
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
<<<<<<< HEAD
=======
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
>>>>>>> day1
};