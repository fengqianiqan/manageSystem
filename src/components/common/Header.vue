<template>
  <div class="header">
    <el-header>
      <div class="title" >员工基本信息管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.name = localStorage.getItem('username')
  }
}
</script>

<style scoped lang="scss">
.header{
  .el-header{
    background: #813c85;
    color: white;
    line-height: 60px;
    display: flex;//自动弹性伸缩，合适适配不同大小的屏幕
    justify-content: space-between;//两端
    .title{
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
