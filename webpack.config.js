const path = require("path");
const fs = require("fs");

const removeSuffix = (str) => str.replace(/\.[^/.]+$/, "");

const filePaths = (folderPath) => {
  const absoluteFolderPath = path.resolve(__dirname, folderPath);

  return fs.readdirSync(absoluteFolderPath).reduce(
    (acc, file) => ({
      ...acc,
      [removeSuffix(file)]: `./${folderPath}/${file}`,
    }),
    {}
  );
};

const buildOtherEntryPath = () => {
  try {
    const filepaths = filePaths("src");
    // Styles and component are bundles modules, not root level individual and should not be exported
    // this removes these  directories and return a copy of filepaths without them.
    const {
      styles: _styles,
      component: _component,
      "": db,
      ...paths
    } = filepaths;
    return paths;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  entry: {
    ...buildOtherEntryPath(),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    alias: {
      config: path.resolve(__dirname, "./config"),
      react: path.resolve(__dirname, "./config/global-dependencies/react.ts"),
      "react-dom": path.resolve(
        __dirname,
        "./config/global-dependencies/react-dom.ts"
      ),
    },
  },
};
