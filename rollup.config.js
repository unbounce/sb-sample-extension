import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import path from 'path';
import nodePolyfills from 'rollup-plugin-node-polyfills';
const fs = require('fs');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externals = {
  react: 'React',
};
const outputBuildDirectory = 'esm';

const commonBuildProcess = {
  external: Object.keys(externals),
  plugins: [
    // A Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules
    resolve({ extensions }),
    // to convert CommonJS modules to ES6, so they can be included in a Rollup bundle, use with resolve plugin
    commonjs({ sourceMap: false }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      extensions: extensions,
      include: ['./src/**/*', './src/*'],
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ],
        '@babel/preset-react',
        [
          '@babel/preset-typescript',
          {
            isTSX: true,
            allExtensions: true
          }
        ]
      ],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import'
      ]
    }),
    nodePolyfills()
  ]
};

const removeSuffix = str => str.replace(/\.[^/.]+$/, '');  

const filePaths = (folderPath) => {
  const absoluteFolderPath = path.resolve(__dirname, folderPath);
 
  return fs.readdirSync(absoluteFolderPath).reduce(
    (acc, file) => ({
      ...acc,
      [removeSuffix(file)]: `./${folderPath}/${file}`
    }),
    {}
  );
};

const buildOtherEntryPath =  () => {
  try {
    const filepaths = filePaths('src')
    // Styles and component are bundles modules, not root level individual and should not be exported
    // this removes these  directories and return a copy of filepaths without them.
    const { styles: _styles, component: _component, '': db, ...paths } = filepaths;
    return paths;
  } catch (err) {
    console.log(err);
  }
};

const buildMainEntryPath = () => {
    try {
      const filepaths = filePaths('src/component')
      // the component folder could have multiple files, but we only need the index file path
      // as that is the entry point
      const { index: indexFilePath,  ...paths } = filepaths;
      return {
        main: indexFilePath
      };
    } catch (err) {
      console.log(err);
    }
  };

export default [
  {
    input: {
    ...buildMainEntryPath(),
    ...buildOtherEntryPath()
    },
    output: [
      {
        dir: outputBuildDirectory,
        entryFileNames: '[name].js',
        format: 'esm',
        sourcemap: true
      }
    ],
    external: commonBuildProcess.external,
    plugins:  [
        ...commonBuildProcess.plugins,
    ]
  },
];
