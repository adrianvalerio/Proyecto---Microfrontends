const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3003/',
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'movies',
      filename: 'remoteEntry.js',
      exposes: {
        './Movies': './src/Movies.tsx', 
      },
      remotes: {
        store_mfe: 'store_mfe@http://localhost:3005/remoteEntry.js',
      },
      shared: {
        react: { 
          singleton: true, 
          eager: false, // Cambia a false
          requiredVersion: false,
          strictVersion: false
        },
        'react-dom': { 
          singleton: true, 
          eager: false, // Cambia a false
          requiredVersion: false,
          strictVersion: false
        },
        zustand: { 
          singleton: true, 
          eager: false, // Cambia a false
          requiredVersion: false,
          strictVersion: false
        },
      },
    }),
  ],
  devServer: {
    port: 3003,
    hot: false,
    static: { directory: path.join(__dirname, 'public') },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};