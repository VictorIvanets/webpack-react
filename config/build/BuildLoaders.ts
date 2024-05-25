import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]{

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }

    const typescriptLoader = 
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      

    return [
        typescriptLoader,
        cssLoaders,
    ]
}