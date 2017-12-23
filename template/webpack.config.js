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
  assetsPath: path.join(__dirname, 'dist/assets/'),
  utilsPath: path.join(__dirname, 'source/utils/'),
  distPath: path.join(__dirname, 'dist'),
};

/* Node Environment */
const isProduction = process.env.NODE_ENV === 'production';

/* Entery */
const entry = './index.jsx';

/* Output */
const output = {
  path: paths.distPath,
  filename: 'app.min.js',
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
  filename: 'index.html',
  template: 'index.html',
}));

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NamedModulesPlugin());
} else {
  plugins.push(new ExtractTextPlugin({
    filename: 'styles.min.css',
    allChunks: true,
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
    resources: [paths.utilsPath + '_colors.sass', paths.utilsPath + '_mixins.sass']
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
      resources: [paths.utilsPath + '_colors.sass', paths.utilsPath + '_mixins.sass']
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

  // quiet: false,
  // noInfo: false,
  // historyApiFallback: false,
  compress: true,
  port: 9000,
  hot: true,
  open: false,
};

/* ----------------------------- */
/* Module                       */
/* ----------------------------- */
module.exports = {
  devtool: !isProduction ? 'inline-sourcemap' : false,
  devServer,

  context: paths.srcPath,

  entry: {
    app: entry,
  },
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
      test: /\.jsx?$/,
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
