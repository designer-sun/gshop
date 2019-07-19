<template>
<div>
    <div class="login">
        <div class="login_back" @click="$router.back()"><</div>
        <div class="login_title">登陆</div>
    </div>
    <section class="">
    <form action="">
        <label>账号:</label>
        <input type="text" class="form-control">
        <label>密码:</label>
        <input type="text" class="form-control">
        <input type="button" class="btn btn-primary col-md-1" value="注册">
    </form>
    </section>
</div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
  export default {
    components:{HeaderTop}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .login
        height 60px
        width 100%
        background-color #1e7e34
        .login_back
            line-height 60px
            font-size 25px
            color white
            padding-left 5px
            float left
        .login_title
            text-align center
            line-height 60px
</style>