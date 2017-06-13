module.exports = {
  parser: 'sugarss',
  plugins: [
    require('postcss-cssnext')({
      browsers: ['> 4%']
    })
  ]
};
