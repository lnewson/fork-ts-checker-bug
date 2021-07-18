const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: 'packages/a/src/index.ts',
  devtool: 'source-map',
  mode: 'development',
  target: [ 'web', 'es5' ],

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    plugins: [
      new TsConfigPathsPlugin({
        extensions: [ '.ts', '.tsx', '.js' ]
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              projectReferences: true,
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        build: true,
      }
    })
  ]
};
