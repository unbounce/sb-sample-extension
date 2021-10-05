import path from "path";
import fs from "fs";

const __dirname = path.resolve();

const fileNames = fs
  .readdirSync("./src")
  .reduce((acc, v) => ({ ...acc, [v]: `./src/${v}` }), {});

const config = {
  mode: "development",
  entry: fileNames,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
