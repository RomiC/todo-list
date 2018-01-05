import * as webpack from 'webpack';
import * as path from 'path';

import * as BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import * as CleanPlugin from 'clean-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';

const src: string = path.resolve(__dirname, 'src');
const srcClient: string = path.resolve(src, 'client');
const srcServer: string = path.resolve(src, 'server');

const dist: string = path.resolve(__dirname, 'build');
const distClient: string = path.resolve(dist, 'assets');

const commonResolve: webpack.Resolve = {
  extensions: ['.ts', '.tsx', '.js'],
  modules: [
    path.resolve(__dirname, 'node_modules'),
    'node_modules'
  ]
};
const commonExternals: RegExp[] = [
  /^[a-z\-0-9]+$/ // Ignore node_modules folder
];
const commonRules: webpack.Rule[] = [
  {
    test: /\.ts(x)?$/,
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
    entry: path.join(srcClient, 'index.tsx'),
    output: {
      filename: 'main.js',
      path: distClient
    },
    devtool: 'source-map',
    resolve: commonResolve,
    module: {
      rules: commonRules
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 8080,
        ui: {
          port: 8081,
        },
        files: 'build/assets/*',
        proxy: 'http://localhost:3000'
      }),
      new CleanPlugin([distClient]),
      new HtmlPlugin({
        title: 'ToDo list',
        template: path.resolve(srcClient, 'index.html')
      })
    ]
  }
];

export default config;