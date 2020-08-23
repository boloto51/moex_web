const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env && env.prod ? "production" : "development",
        entry: {
            ThemesIndex: './app/scripts/ThemeManager.ts',
            login: './app/scripts/LoginManager.ts',
            reset: './app/scripts/ResetManager.ts',
            register: './app/scripts/RegisterManager.ts',
            forgot: './app/scripts/ForgotPassManager.ts',
            adminThemeIndex: './app/scripts/Admin/ThemeIndexManager.ts',
            adminPatternIndex: './app/scripts/Admin/PatternIndexManager.ts',
            patternsIndex: './app/scripts/PatternIndexManager.ts',
            userSetRole: './app/scripts/Admin/UserManager.ts'
        },
        devtool: env && env.prod ? false : "inline-source-map",
        devServer: {
            contentBase: 'wwwroot/js/raw',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        optimization: {
            minimizer: env && env.prod ? [
                new UglifyJsPlugin()
            ] : []
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'wwwroot/js/'),
            library: '[name]Pack'
        }
    };
};