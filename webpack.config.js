const path= require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { isArrowFunction } = require('typescript');
module.exports={
  mode: 'development',
  entry: "./src/index.ts",
  output:{

    path: path.resolve(__dirname,'dist'),

    filename:"bundle.js",

    environment:{
      arrowFunction: false
    }
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use: [
          {
             loader: 'babel-loader',
             options: {
              presets:[
                [
                  "@babel/preset-env",
                  {
                    targets:{
                      "chrome":"88",
                      "ie":"11"
                    },
                    "corejs":"3",
                    "useBuiltIns":"usage",
                  }
                ]
              ]
             }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

 plugins:[
  new CleanWebpackPlugin(),
  new HTMLWebpackPlugin({
    template:'./src/index.html'
  }
  )
 ],
// recognize ts and js module 
 resolve:{
  extensions:['.ts','.js']
 }
}