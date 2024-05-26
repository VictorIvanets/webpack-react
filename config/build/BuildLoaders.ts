import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]{
    
    const svgLoader =  {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    }

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    // const imageLoaders = {
    //   test: /\.(gif|png|jpe?g|svg)$/i,
    //   use: [
    //     'file-loader',
    //     {
    //       loader: 'image-webpack-loader',
    //       options: {
    //         bypassOnDebug: true, // webpack@1.x
    //         disable: true, // webpack@2.x and newer
    //       },
    //     },
    //   ],
    // }

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
        svgLoader,
        fileLoader,
        // imageLoaders
    ]
}