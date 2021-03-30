const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'; // se a minha variável é diferente de prod quer dizer que eu estou em dev

module.exports = {
  mode: isDevelopment ? 'development' : 'production', 
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // qual é o arquivo principal da aplicação
  output: { // qual é o arquivo que eu vou gerar com o webpack
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ // por padrÃO vai ler arquivos JS
      '.js', // então aqui falo que ele pode ler js ou jsx 
      '.jsx'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // preciso falar onde está o html da aplicação 
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(), // quero que ele rode só em ambiente de desenvolvimento
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') // qual arquivo de template ele vai utilizar para gerar o html 
    })
  ].filter(Boolean), // na minha condição se isDevelopment for false, vai dar erro, pq vou ter o false dentro do meu array, então preciso desse hackzinho
  module: { // aqui eu vou falar como a aplicação vai se comportar quando eu estiver importando cada tipo de arquivo 
    rules: [
      {
        test: /\.jsx$/, // todos os arquivos tem que terminar com jsx
        exclude: /node_modules/, // não quero que faça o processo de conversão dos arquivos do node modules
        use: {
          loader: 'babel-loader', // é a integração entre o babel e o webpack
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      }, 
      {
        test: /\.scss$/, 
        exclude: /node_modules/, 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
    ]
  }
}