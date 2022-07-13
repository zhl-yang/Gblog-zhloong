/**
 * @description 导出默认网路配置
 **/
let mockServer = process.env.VUE_APP_BASE_API
let dev = 'http://localhost:8080'
let prod = 'https://blog.zhloong.xyz'
let env = 'development' ? dev : prod
let mock = false
console.log(`当前环境：${env}`)
console.log(`当前是否使用mock数据：${mock}`)
console.log(`当前baseURL数据接口地址：`)
console.log(mock ? mockServer : env)
const network = {
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL: mock ? mockServer : env,
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 30000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401,
}
module.exports = network
