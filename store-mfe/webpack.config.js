const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3005/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'store_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './store': './src/store.ts',
      },
      shared: {
        react: { 
          singleton: true, 
          eager: false,
          requiredVersion: false,
          strictVersion: false
        },
        'react-dom': { 
          singleton: true, 
          eager: false,
          requiredVersion: false,
          strictVersion: false
        },
        zustand: { 
          singleton: true, 
          eager: false,
          requiredVersion: false,
          strictVersion: false
        },
      },
    }),
  ],
  devServer: {
    port: 3005,
    hot: false,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};