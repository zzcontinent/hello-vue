<template>
  <div>
    <Request class='mid'> </Request>
    <Tables class='mid'> </Tables>
    <Chart
      class='mid'
      :chartData='m_chartData'
    ></Chart>
  </div>
</template>

<script>
import Request from '@/components/Request'
import Tables from '@/components/Tables'
import Chart from '@/components/Chart'
export default {
  components: {
    Request,
    Tables,
    Chart
  },
  data: function () {
    return {
      m_chartData: {
      }
    }
  },
  created: function () {
    setInterval(() => {
      this.m_chartData = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data 1',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data 2',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    }, 1000)
  },
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
.mid {
  width: 67%;
  margin: 0 auto;
}
</style>
