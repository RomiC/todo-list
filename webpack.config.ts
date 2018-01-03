import * as webpack from 'webpack';
import * as path from 'path';

import * as CleanPlugin from 'clean-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';

const src: string = path.resolve(__dirname, 'src');
const srcClient: string = path.resolve(src, 'client');
const srcServer: string = path.resolve(src, 'server');

const dist: string = path.resolve(__dirname, 'build');
const distClient: string = path.resolve(dist, 'assets');

const commonResolve: webpack.Resolve = {
  extensions: ['.ts', '.js'],
  modules: [
    path.resolve(__dirname, 'node_modules'),
    'node_modules'
  ]
};
const commonExternals: RegExp[] = [
  /^[a-z\-0-9]+$/ // Ignore node_modules folder
];
const commonRules:webpack.Rule[] = [
  {
    test: /\.ts$/,
    loader: 'awesome-typescript-loader'
  }
];

const config: webpack.Configuration[] = [
  {
    entry: path.join(src, 'index.ts'),
    output: {
      filename: 'index.js',
      libraryTarget: 'commonjs',
      path: dist
    },
    target: 'node',
    devtool: 'source-map',
    resolve: commonResolve,
    externals: commonExternals,
    module: {
      rules: commonRules
    },
    plugins: [
      new CleanPlugin([dist])
    ]
  },
  {
    entry: path.join(srcClient, 'index.ts'),
    output: {
      filename: 'main.js',
      libraryTarget: 'commonjs',
      path: distClient
    },
    devtool: 'source-map',
    resolve: commonResolve,
    module: {
      rules: commonRules
    },
    plugins: [
      new CleanPlugin([distClient]),
      new HtmlPlugin({
        title: 'ToDo list'
      })
    ]
  }
];

export default config;