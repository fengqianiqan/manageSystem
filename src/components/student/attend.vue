<template>
  <div cla="studentss">
    <el-form :inline="true" :model="formInline" cla="demo-form-inline" size="small">
      <el-form-item label="员工姓名">
        <el-input v-model="formInline.name" placeholder="请输入作业名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="员工姓名" align='center'></el-table-column>
      <el-table-column prop="cla" label="部门" align='center'></el-table-column>
      <el-table-column prop="actual" label="出勤率" align='center'></el-table-column>
      <el-table-column prop="salary" label="薪资" align='center'></el-table-column>
    </el-table>
    <!-- 分页-->
    <Page :total="total"
    :url="url"
    ></Page>
  </div>
</template>

<script>
import { getData } from '../../api/api'
import Page from '../common/Page'
export default {
  name: 'studentss',
  components: {
    Page
  },
  data () {
    return {
      formInline: {
        name: ''
      },
      tableData: [],
      total: 10,
      url: '/studentss'
    }
  },
  created () {
    getData(this, '/studentss')
  },
  methods: {
    find () {
      getData(this, '/studentss', this.formInline)
    },
    reset () {
      getData(this, '/studentss', {})
      this.formInline = {}
    }
  }
}
</script>

<style lang="scss">
.studentss {
  .demo-form-inline, .el-form-item {
    text-align: left;
  }
}
</style>
