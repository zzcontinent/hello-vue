
<template>
  <div class="request">
    <h2>请求方式</h2>
    <select v-model="m_type">
      <option
        value="post"
        selected="selected"
      >post</option>
      <option value="get">get</option>
    </select>

    <h2>服务名</h2>
    <input
      type="text"
      v-model="m_url"
    >
    <button @click="request">POST</button>
    <div>
      <div class='floatLeft'>
        <h2>请求参数</h2>
        <textarea
          rows="20"
          v-model="m_msg"
        >request:</textarea>
      </div>
      <div class='floatLeft'>
        <h2>响应</h2>
        <textarea
          rows="20"
          readonly="readonly"
          v-model="m_ret"
        >response:</textarea>
      </div>
    </div>
  </div>
</template>

<script>
const utilHttp = require('../utils/http.js')
const utilMisc = require('../utils/misc.js')
export default {
  name: 'Request',
  data () {
    return {
      m_url: 'alpha.mini.router/MINI_Fans/GainFans',
      m_msg: JSON.stringify({ 'ChartView': 1, 'Uid': 2 }),
      m_ret: '',
      m_type: 'post'
    }
  },
  methods: {
    request: function () {
      if (this.m_type === 'post') {
        utilHttp.Post(utilHttp.proxyTableConfig.proxyBaseURL + this.m_url, JSON.parse(this.m_msg)).then((res) => {
          this.m_ret = utilMisc.formatJson(res.data)
        }).catch((err) => {
          this.m_ret = err
        })
      } else {
        utilHttp.Get(utilHttp.proxyTableConfig.proxyBaseURL + this.m_url, JSON.parse(this.m_msg)).then((res) => {
          this.m_ret = (res.data)
        }).catch((err) => {
          this.m_ret = err
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 16px;
  margin: 0px;
}
input {
  width: 67%;
  background-color: lightgray;
}
textarea {
  background-color: lightcyan;
  font-size: 16px;
  overflow: auto;
  word-break: break-all;
  width: 100%;
}
.floatLeft {
  float: left;
  width: 48%;
  margin: auto 1%;
}
</style>
