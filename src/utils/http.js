const axios = require('axios')
// const qs = require('qs')
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = '/api'

module.exports = {
    Post: function (url, data) {
        const options = {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
            },
            data: data,
            url
        }
        return axios(options)
    },
    Get: function (url, data) {
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
            },
            data: data,
            url
        }
        return axios(options)
    },
    proxyTableConfig: {
        // '/api': {
        //     target: 'http://129.204.69.39',
        //     changeOrigin: true
        //     // pathRewrite: {
        //     //     '^/api': ''
        //     // }
        // }
    }
}
