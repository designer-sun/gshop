<template>
    <div>
        <HeaderTop title="个人中心">
            <div class="pro_left" slot="left" ></div>
            <div class="pro_right" slot="right"></div>
        </HeaderTop>
        <section>
            <div class="my_info">
                <div class="if_login">
                <router-link to="/login">Login</router-link>
                </div>
            </div>
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
    .pro_left
        width 20%
    .pro_right
        width 20%
    .my_info
        margin-top 60px
        height 90px
        width 100%
        background-color antiquewhite
        .if_login
            text-align center
            line-height 90px
</style>