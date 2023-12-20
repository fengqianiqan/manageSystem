<template>
  <div class="Login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>员工基本信息管理系统</span>
      </div>
      <el-form :model="ruleForm"  ref="ruleForm" label-width="80px" >
        <el-form-item label="用户名"
                      prop="username"
        :rules="[
          {required:true, message:'请输入用户名', trigger:'blur'},
          {
          min: 4,
          max: 12,
          message:'长度是4—12',
          trigger: 'blur'
          }
        ]"
        >
          <el-input type="text" v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass"
        :rules="[
          {required:true, message:'请输入密码', trigger:'blur'},
          {
          min: 8,
          max: 15,
          message:'长度是8—15个字符',
          trigger: 'blur'
          }
          ]"
        >
          <el-input type="password" v-model="ruleForm.pass" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        username: '',
        pass: ''
      }
    }
  },
  methods: {
    login (ruleForm) {
      console.log(this.$refs)
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          // this.$router.push('/home')
          this.axios.post('http://rap2api.taobao.org/app/mock/304740/login', this.form)
            .then(res => {
              if (res.data.status === 200) {
                localStorage.setItem('username', res.data.username)
                console.log(res)
                this.$message({
                  message: res.data.message,
                  type: 'success'
                })
                this.$router.push('/home')
              }
            })
            .catch(err => {
              console.error(err)
            })
        } else {
          console.error(this.ruleForm)
        }
      }
      )
    }
  }

}
</script>

<style lang="scss">
  .Login{
    width : 100% ;
    height :100% ;
    position: absolute;
    background: darkseagreen;
    .el-card{
      width: 450px;
      //height: 300px;
      margin: 200px auto;
      .clearfix{
        font-size: 20px;
      }
      .el-button{
        width: 100%;
      }
    }

  }
</style>
