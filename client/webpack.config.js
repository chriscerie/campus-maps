module.exports = {
  rules: {
    use: {
      loader: 'babel-loader',
      options: {
        ignore: [ './node_modules/mapbox-gl/dist/mapbox-gl.js' ]
      }
    }
  }
}
