module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://matrixbox.in:3000/",
  },
};
