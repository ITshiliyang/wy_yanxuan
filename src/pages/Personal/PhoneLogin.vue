<template>
  <div class="loginContainer">
    <PersonalHeader/>
    <div class="loginWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="form">
        <div class="phone">
          <input
            type="text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phone.code"
            @blur="frontVerify"
            @focus="errorMsg = ''"
          ></input>
          <i
            class="iconfont icon-LC_icon_close_fill_circle"
            v-show="phone.code"
            @click="phone.code = ''; errorMsg = ''"
          ></i>
        </div>
        <div class="verify" v-if="phoneLogin">
          <input
            type="text"
            maxlength="6"
            placeholder="请输入短信验证码"
            v-model="phone.verifyText"
          ></input>
          <button class="getVerify" @click="frontVerify('btn')">获取验证码</button>
        </div>
        <div class="verify" v-else>
          <input
            type="password"
            placeholder="请输入密码"
            v-model="phone.password"
            maxlength="26"></input>
          <i
            class="iconfont icon-LC_icon_close_fill_circle"
            v-show="phone.password"
            @click="phone.password = ''"></i>
        </div>
        <div class="errorMsg" v-show="errorMsg">{{errorMsg}}</div>
        <div class="switch">
          <span>{{switchText}}</span>
          <button
            class="switchButton"
            @click="phoneLogin = false; phone.verifyText = ''"
            v-if="phoneLogin"
          >使用密码验证登录</button>
          <button
            class="switchButton"
            @click="phoneLogin = true; phone.password = ''"
            v-else
          >使用短信验证登录</button>
        </div>
        <button class="login">登录</button>
      </div>
      <button class="switchLogin" @click.prevent="$router.replace('/personal')">其他登录方式</button>
      <div class="registerWrap">
        <span>注册账号</span>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonalHeader from '../../components/PersonalHeader/PersonalHeader'
  export default {
    data () {
      return {
        phoneLogin: true,
        phone: {
          code: '',
          verifyText: '',
          password: ''
        },
        errorMsg: ''
      }
    },
    computed: {
      switchText () {
        return this.phoneLogin ? '遇到问题?' : '忘记密码?'
      },
    },
    methods: {
      frontVerify (type) {
        if (type === 'btn' && !this.phone.code) {
          this.errorMsg = '请输入手机号'
        }
        if (!/^1\d{10}$/.test(this.phone.code) && this.phone.code) {
          this.errorMsg = '手机号格式错误'
        }
      }
    },
    components: {
      PersonalHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
    width 100%
    height 100%
    position relative
    .loginWrap
      background-color #fff
      position absolute
      top 88px
      bottom 0
      height auto
      width 100%
      box-sizing border-box
      padding 0 40px
      display flex
      align-items center
      flex-direction column
      img
        width 192px
        margin-top 56px
      .form
        margin-top 40px
        padding-top 114px
        width 100%
        display flex
        flex-direction column
        align-items center
        .phone
          width 100%
          height 90px
          border-bottom 1px solid #eee
          display flex
          justify-content center
          align-items center
          input
            outline none
            display block
            width 100%
            margin 28px 0
            height 34px
            line-height 34px
            font-size 28px
          i
            font-size 24px
            color #ccc
            width 64px
            height 64px
            display flex
            justify-content center
            align-items center
        .verify
          margin-top 32px
          width 100%
          height 90px
          border-bottom 1px solid #eee
          display flex
          justify-content space-between
          align-items center
          input
            outline none
            display block
            width 100%
            margin 28px 0
            height 34px
            line-height 34px
            font-size 28px
          .getVerify
            white-space nowrap
            background-color #fff
            border 2px solid #7F7F7F
            border-radius 10px
            height 54px
            margin-right 16px
            outline none
          i
            font-size 24px
            color #ccc
            width 64px
            height 64px
            display flex
            justify-content center
            align-items center
        .errorMsg
          width 100%
          height 40px
          line-height 40px
          margin 16px
          color #b4282d
        .switch
          width 100%
          height 42px
          margin-top 38px
          display flex
          justify-content space-between
          span
            color #7f7f7f
            font-size 28px
          .switchButton
            outline none
            background-color #fff
            border 0
            padding 0
        .login
          width 100%
          height 91px
          background-color #b4282d
          border-radius 6px
          border 0
          font-size 28px
          color #fff
          margin 30px 0
          padding 0
      .switchLogin
        width 100%
        height 91px
        background-color #fff
        border 2px solid #b4282d
        border-radius 6px
        color #b4282d
        padding 0
        margin-bottom 30px
      .registerWrap
        width 100%
        height 32px
        display flex
        justify-content center
        align-items center
        span
          font-size 28px
          color #333
          display block
        i
          display block
          width 28px
          height 32px
          margin-left 4px
          color #333
          &:before
            display block
            font-size 28px
            line-height 32px
  strong
    zoom 1
</style>
