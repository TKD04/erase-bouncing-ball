const path = require("node:path");
const TerserPlugin = require("terser-webpack-plugin");
const PugPlugin = require("pug-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");

module.exports = {
  devServer: {
    hot: true,
    static: path.resolve(__dirname, "dist"),
  },
  entry: {
    index: path.resolve(__dirname, "src/pug/index.pug"),
  },
  module: {
    rules: [
      {
        include: srcDir,
        test: /\.pug$/i,
        use: PugPlugin.loader,
      },
      {
        include: srcDir,
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { grid: true }]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        exclude: /[\\/]node_modules[\\/]/,
        include: srcDir,
        test: /\.tsx?$/i,
        use: "ts-loader",
      },
      {
        include: srcDir,
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-gifsicle",
              "imagemin-svgo",
            ],
          },
        },
      }),
    ],
    runtimeChunk: "single",
    usedExports: true,
  },
  output: {
    clean: true,
  },
  plugins: [
    new PugPlugin({
      css: {
        filename: "./css/[name].[contenthash:8].css",
      },
      js: {
        filename: "./js/[name].[contenthash:8].js",
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
