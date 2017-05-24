<template>
  <div>
    <div class="login-header">
      <span class="set" v-on:click="show = true">账户登录</span>
    </div>
    <div class="login-content">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" v-on:click="handleLogIn('formInline')">登录</Button>
        </Form-item>
    </Form>
    <a v-on:click="toSignUp">还没有账户？点我注册</a>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'login',
        computed: {

        },
        data () {
            return {
                formInline: {
                    user: '',
                    password: '',
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                login: true
            }
        },
        methods: {
          toSignUp: function () {
            window.location.hash='/signup'
          },
          handleLogIn:function(name) {
            var that=this
              this.$refs[name].validate(function(valid){
                  if (valid) {
                    window.localStorage.username=that.formInline.user
                    window.location.hash="#/personal"
                    console.log('提交成功!');
                  }else{
                    console.log("fail")
                  }
              })
          }
        }
    }
</script>
<style>
.login-header{
  width:100%;
  height:3rem;
  background-color: rgba(0, 168, 159, 0.8);
  padding: 0.5rem 1rem;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content{
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
