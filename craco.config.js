// webpack-plugin configuration

const path = require('path');

module.exports = {
    webpack:{
        alias:{
            // set @ to represent the src directory
            '@': path.resolve(__dirname, 'src'),
        }
    }
}