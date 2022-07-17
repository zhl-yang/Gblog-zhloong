module.exports = {
    devServer: {
        port: 8083,
    },
    lintOnSave: false
}

module.exports = {
    devServer: {
        proxy: 'http://192.168.31.134', // 请求的ip或者域名:端口号
        public: '127.0.0.1:8084', // 本地的ip:端口号
        port: '8084'
    }
};