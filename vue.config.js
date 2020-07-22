//配置需要添加到webpack配置的设置

module.exports = {
  configureWebpack: {
    resolve:{ //配置快捷路径
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // publicPath: './'
}