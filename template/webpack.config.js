/* Webpack config by SaliMike */

/* Base */
const path = require('path');
const webpack = require('webpack');

/* Plugin's */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* Paths */
const paths = {
  srcPath: path.join(__dirname, 'source'),
  distPath: path.join(__dirname, 'dist'),
  assetsPath: path.join(__dirname, 'dist/assets/'),
  utilsPath: path.join(__dirname, 'source/utils/'),
  modulesPath: path.join(__dirname, 'source/modules/'),
};

/* Node Environment */
const isProduction = process.env.NODE_ENV === 'production';

/* Entery */
const entry = {
  app: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('react-error-overlay'),
    './index.js'
  ],
};

/* Output */
const output = {
  path: paths.distPath,
  pathinfo: true,
  publicPath: "/",
  filename: 'scripts/[name].min.js'
};

/* ----------------------------- */
/* Plugins - konfiguracja        */
/* ----------------------------- */
const plugins = [];

plugins.push(new HtmlWebpackPlugin({
  minify: {
    collapseWhitespace: true,
    html5: true,
    removeComments: true,
  },
  hash: true,
  inject: true,
  chunks: ["app"],
  template: 'index.html',
  filename: 'index.html',
}));

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NamedModulesPlugin());
} else {
  plugins.push(new ExtractTextPlugin({
    filename: 'styles/[name].min.css',
    allChunks: false,
  }));
}

/* ----------------------------- */
/* Sass - konfiguracja styli */
/* ----------------------------- */

// Develop configuration
const sassDevelop = [{
  loader: 'style-loader',
}, {
  loader: 'css-loader',
  options: {
    minimize: false,
    sourceMap: true,
    camelCase: true,
  },
}, {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
}, {
  loader: 'sass-resources-loader',
  options: {
    resources: [paths.utilsPath + 'styles/_colors.sass', paths.utilsPath + 'styles/_mixins.sass']
  },
}];

// Build configuration
const sassProduction = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      minimize: true,
      sourceMap: false,
      camelCase: true,
      localIdentName: '[path][name]__[local]--[hash:base64:6]',
    },
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')]
    },
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
    },
  }, {
    loader: 'sass-resources-loader',
    options: {
      resources: [paths.utilsPath + 'styles/_colors.sass', paths.utilsPath + 'styles/_mixins.sass']
    },
  }],
});

const sassConfig = isProduction ? sassProduction : sassDevelop;

/* ----------------------------- */
/* CSS - Vendor styli */
/* ----------------------------- */

// Develop configuration
const cssDevelop = [{
  loader: 'style-loader',
}, {
  loader: 'css-loader',
  options: {
    minimize: false,
    sourceMap: true,
    camelCase: true,
  },
}];

// Build configuration
const cssProduction = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      minimize: true,
      sourceMap: false,
      camelCase: true,
      localIdentName: '[path][name]__[local]--[hash:base64:6]',
    },
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')]
    },
  }],
});

const cssConfig = isProduction ? cssProduction : cssDevelop;

/* ----------------------------- */
/* JS - konfiguracja             */
/* ----------------------------- */

const jsConfig = {
  loader: 'babel-loader',
};

/* ----------------------------- */
/* Fileloader - konfiguracja       */
/* ----------------------------- */

const fileConfig = {
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]',
    outputPath: 'assets/',
    emitFile: true,
  },
};

/* ----------------------------- */
/* Dev Server - konfiguracja     */
/* ----------------------------- */
const devServer = {
  contentBase: paths.distPath,
  host: '0.0.0.0',
  overlay: false,

  // quiet: false,
  // noInfo: false,
  historyApiFallback: {
    rewrites: [
      { from: /^\/$/, to: '/index.html' },
      { from: /^\/admin/, to: '/admin/index.html' },
      { from: /^\/register/, to: '/register/index.html' },
      { from: /^\/login/, to: '/login/index.html' },
      { from: /^\/logout/, to: '/logout/index.html' },
      { from: /./, to: '/views/404.html' }
    ]
  },
  compress: true,
  hot: true,
  open: false,
};

/* ----------------------------- */
/* Module                       */
/* ----------------------------- */
module.exports = {
  //devtool: !isProduction ? 'inline-sourcemap' : false,
  devtool: false,
  devServer,

  context: paths.srcPath,

  entry: entry,
  output,

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.sass', '.scss'],
  },

  module: {
    rules: [{
      test: /\.(sass)$/,
      use: sassConfig,
    }, {
      test: /\.(css)$/,
      use: cssConfig,
    }, {
      test: /\.(jsx|js)?$/,
      exclude: /(node_modules)/,
      use: jsConfig,
    },
    {
      test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: fileConfig,
    }],
  },

  plugins,
};
