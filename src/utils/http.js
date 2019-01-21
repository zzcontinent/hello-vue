const axios = require('axios')
const qs = require('qs')
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// axios.defaults.baseURL = '/api'

module.exports = {
    Post: function (url, data) {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' },
            data: qs.stringify(data),
            url
        }
        return axios(options)
    },
    Get: function (url, data) {
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' },
            data: qs.stringify(data),
            url
        }
        return axios(options)
    },
    proxyTableConfig: {
        // '/api': {
        //     target: 'http://cvm',
        //     changeOrigin: true
        //     // pathRewrite: {
        //     //     '^/api': ''
        //     // }
        // }
    }
}
