<template>
  <div>
    <div class="login-header">
      <span class="set" v-on:click="show = true">账户登录</span>
    </div>
    <div class="login-content">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password1">
            <Input type="password" v-model="formInline.password1" placeholder="请输入密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password2">
            <Input type="password" v-model="formInline.password2" placeholder="再次输入密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSignIn('formInline')">登录</Button>
        </Form-item>
    </Form>
    <a v-on:click="toLogin">已有账户？点我登录</a>
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
                    password1: '',
                    password2: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password1: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ],
                    password2: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                login: false
            }
        },
        methods: {
          toLogin: function () {
            window.location.hash='/login'
          },
            handleSignIn: function(name) {
              var p1=this.formInline.password1
              var p2=this.formInline.password2
                this.$refs[name].validate(function(valid){
                    if (valid&&p1===p2) {
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
