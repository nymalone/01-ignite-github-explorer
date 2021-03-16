const path = require('path');

module.exports = {
  mode: 'development',
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
  module: { // aqui eu vou falar como a aplicação vai se comportar quando eu estiver importando cada tipo de arquivo 
    rules: [
      {
        test: /\.jsx$/, // todos os arquivos tem que terminar com jsx
        exclude: /node_modules/, // não quero que faça o processo de conversão dos arquivos do node modules
        use: 'babel-loader', // é a integração entre o babel e o webpack
      }
    ]
  }
}