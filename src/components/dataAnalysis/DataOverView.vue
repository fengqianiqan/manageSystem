<template>
<div class="data-view">
  <el-card>
    <div id="main1"></div>
  </el-card>
  <el-card>
    <div id="main2"></div>
  </el-card>
</div>
</template>
<script>
export default {
  name: 'DataOverView',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    console.log(this.arr1)
    // this.echarts()
    // 基于准备好的dom,初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        text: '项目完成率'
      },
      tooltip: {},
      xAxis: {
        data: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六']
      },
      yAxis: {},
      series: [{
        name: '百分占比（%）',
        type: 'bar',
        data: [79, 43, 68, 48, 80, 90]
      }]
    })

    var myChart1 = this.$echarts.init(document.getElementById('main2'))
    let option = {
      title: {
        text: '部门月度业绩折线图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['A部门', 'B部门', 'C部门', 'D项目', 'E部门']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月','十二月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'A部门',
          type: 'line',
          stack: '总量',
          data: [3625, 4958, 2610, 5165, 4956, 6169, 9443, 5800, 6559, 5447, 3539, 3616]
        },
        {
          name: 'B部门',
          type: 'line',
          stack: '总量',
          data: [2563, 7299, 2280, 3785, 9454, 3627, 3870, 4971, 7851, 9204, 5783, 9385]
        },
        {
          name: 'C部门',
          type: 'line',
          stack: '总量',
          data: [3925, 4558, 5152, 5133, 2088, 2779, 4468, 2785, 2703, 2792, 4968, 7718]
        },
        {
          name: 'D项目',
          type: 'line',
          stack: '总量',
          data: [3689, 6320, 3824, 7408, 5880, 5113, 7132, 8185, 9206, 9932, 6166, 9417]
        },
        {
          name: 'E部门',
          type: 'line',
          stack: '总量',
          data: [3600, 5462, 4100, 6505, 5920, 6500, 7980, 8907, 8400, 9200, 6522, 9062]
        }
      ]
    }
    myChart1.setOption(option)
  }
}
</script>

<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1, #main2 {
      height: 500px;
    }
  }
}
</style>
