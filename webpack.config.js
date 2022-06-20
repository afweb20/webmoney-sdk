const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {

  let enviroment = getEnviroment(env, argv);

  let config = {
    entry: {
      "webmoney-header": {
        import: "./src/webMoneyHeader/webMoneyHeader.js",
        library: {
          name: "WebMoneyHeader",
          type: "umd",
          export: "default"
        }
      },
      "webmoney-navbar": {
        import: "./src/webMoneyNavbar/webMoneyNavbar.js",
        library: {
          name: "WebMoneyNavbar",
          type: "umd",
          export: "default"
        }
      },
      "webmoney-footer": {
        import: "./src/webMoneyFooter/webMoneyFooter.js",
        library: {
          name: "WebMoneyFooter",
          type: "umd",
          export: "default"
        }
      },
      test: {
        import: "./src/test/test.js"
      },
      ie11: {
        import: "./src/test/ie11.js"
      }
    },
    output: {
      publicPath: "",
      path: path.resolve(__dirname, "./dist")
    },
    target: ["web", "es5"],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", {
                  useBuiltIns: false,
                  targets: "ie 11"
                }]
              ]
            }
          }
        },
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: "asset/resource",
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/test/index.html"),
        filename: "index.html",
        scriptLoading: "blocking"
      }),
      new CleanWebpackPlugin()
    ],
    mode: enviroment
  };

  if (enviroment == "development") {

    config.devtool = "source-map";

    config.devServer = {
      historyApiFallback: true,
      devMiddleware: {
        writeToDisk: true
      },
      open: true,
      compress: true,
      hot: true,
      port: 3002
    };
  } else {

    config.output.publicPath = "https://cdn.web.money/layout/";
  }

  return config;
}

function getEnviroment(env, argv) {

  let enviroment = "development";

  if (env != null && env.enviroment != null) {

    enviroment = env.enviroment;

  } else if (process != null && process.env != null && process.env.npm_config_argv != null) {

    let npm_config_argv = process.env.npm_config_argv;

    let parsingArray = /"--env[.]enviroment=([a-z]+)"/.exec(npm_config_argv);

    if (parsingArray != null && parsingArray.length > 1) {

      enviroment = parsingArray[1];
    }
  }

  return enviroment;
}