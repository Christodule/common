var path = require('path');
module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },

          }
        }
      ]
    },
    resolve: {
      extensions: [".*",".js",".jsx"]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    mode:'production',
    externals: {
      react: 'commonjs react',
     'react-dom': 'commonjs react-dom',
    },
    performance: {
      hints: false
    }
};