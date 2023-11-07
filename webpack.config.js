module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: ['postcss-import', 'tailwindcss', 'autoprefixer']
          }
        }
      }
    ]
  }
};
