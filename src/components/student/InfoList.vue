<template>
  <div class="infoList">
    <el-form :inline="true" :model="formInline" class="topform" size="mini">
      <el-form-item>
        <el-button type="primary" @click="addStu" size="mini">新增</el-button>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="findStu" size="mini">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset" size="mini">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center"  ></el-table-column>
      <el-table-column prop="sex" label="性别" align="center" ></el-table-column>
      <el-table-column prop="age" label="年龄" align="center" ></el-table-column>
      <el-table-column prop="num" label="工号" align="center" ></el-table-column>
      <el-table-column prop="bor" label="出生日期" align="center" ></el-table-column>
      <el-table-column prop="ide" label="身份证号" align="center" ></el-table-column>
      <el-table-column prop="adr" label="出差地址" align="center"  ></el-table-column>
      <el-table-column prop="pro" label="持有项目" align="center"  ></el-table-column>
      <el-table-column prop="time" label="入职时间" align="center"  ></el-table-column>
      <el-table-column prop="pho" label="联系方式" align="center"  ></el-table-column>
      <el-table-column label="操作" align="center"  width="180px">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页-->
    <Page :total="total" :url="url"></Page>
    <!--  新增信息嵌套表单-->
    <el-dialog :title="state ? '新增员工信息' : '修改员工信息'" :visible.sync="dialogFormVisible" width="400px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="男" size="mini">男</el-radio>
          <el-radio v-model="form.sex" label="女" size="mini">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model.number="form.age" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="工号" :label-width="formLabelWidth" prop="num">
          <el-input v-model.number="form.num" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth" prop="bor">
          <el-input v-model.number="form.bor" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth" prop="ide">
          <el-input v-model="form.ide" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="出差地址" :label-width="formLabelWidth" prop="adr">
          <el-input v-model="form.adr" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="持有项目" :label-width="formLabelWidth" prop="pro">
          <el-input v-model="form.pro" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" :label-width="formLabelWidth" prop="time">
          <el-input v-model="form.time" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="pho">
          <el-input v-model.number="form.pho" autocomplete="off" size="mini"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false" size="mini">取消</el-button>
        <el-button type="primary" @click="sure('form')" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getData, changeInfo, remove } from '../../api/api'
import Page from '../common/Page'
export default {
  name: 'infoList',
  components: {
    Page
  },
  data () {
    return {
      url: '/studentss',
      formLabelWidth: '80px',
      dialogFormVisible: false,
      state: true,
      form: {
        name: '',
        sex: '',
        age: '',
        num: '',
        bor: '',
        ide: '',
        adr: '',
        pro: '',
        time: '',
        pho: ''
      },
      rules: {
        name: [{required: true, message: '请输入姓名'}],
        sex: [{required: true, message: '请选择性别'}],
        age: [{required: true, message: '请输入年龄'},
          {type: 'number', message: '年龄必须是数字'}],
        adr: [{required: true, message: '请输入出差地址'}],
        pro: [{required: true, message: '请输入持有项目'}],
        pho: [{required: true, message: '请输入联系方式'},
          {type: 'number', message: '联系方式必须是数字'}]
      },
      // 分页数据
      total: 10,
      tableData: [{
      }],
      formInline: {
        name: ''
      }
    }
  },
  created () {
    getData(this, '/studentss')
    // this.getCount()
  },
  methods: {
    updateInfo (row) {
      console.log(row)
      this.state = false
      this.dialogFormVisible = true
      this.form = {...row}
    },
    dele (row) {
      remove(this, row, '/studentss')
    },
    addStu () {
      this.state = true
      this.dialogFormVisible = true
    },
    findStu () {
      // console.log(this.formInline)
      this.service.get('/studentss', {
        params: this.formInline
      })
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            this.tableData = [...res.data]
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    reset () {
      getData(this, '/studentss')
    },
    sure (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state) {
            changeInfo(this, 'post', '/studentss', '新增数据成功', form, getData)
          } else {
            changeInfo(this, 'patch', '/studentss', '修改数据成功', form, getData)
          }
        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.studentList{
  .topform ,.el-form-item{
    text-align: left;
  }
  .el-select{
    width: 100%;
  }
  .el-pagination{
    text-align: right;
    margin-top: 20px;
  }
}
</style>
