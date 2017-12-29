import * as webpack from 'webpack';
import * as path from 'path';

import * as CleanPlugin from 'clean-webpack-plugin';

const src: string = path.resolve(__dirname, 'src');
const srcServer: string = path.resolve(src, 'index.ts');

const dist: string = path.resolve(__dirname, 'build');

const config: webpack.Configuration[] = [
  {
    entry: srcServer,
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs',
      path: dist
    },
    target: 'node',
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules'
      ]
    },
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    plugins: [
      new CleanPlugin([dist])
    ]
  }
];

export default config;