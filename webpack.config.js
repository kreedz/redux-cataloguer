const path = require('path');
module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
         test: /\.tsx?$/,
         enforce: 'pre',
         loader: 'tslint-loader',
         include: [
           path.resolve(__dirname, 'src'),
         ],
      },
      {
        enforce: 'pre',
        test: /\.css$/,
        use: {
          loader: 'typed-css-modules-loader',
          options: {
            camelCase: true
          }
        },
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'ts-loader',
          },
        ]
      },
      {
        test: [/\.eot?$/,  /\.png$/,],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[ext]',
            }
          }
        ]
      },
      {
        test: [/\.woff?$/, /\.woff2?$/, /\.ttf?$/, /\.svg?$/,],
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  }
}
