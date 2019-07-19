<template>
        <div class="foot_guide">
            <span href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
                <span><svgicon class="" name="home" width="30" height="30" @click="goTo('/msite')"></svgicon></span>
                <span>外卖</span>
            </span>
            <span class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
                <span><svgicon class="" name="search" width="30" height="30"></svgicon></span>
                <span>搜索</span>
            </span>
            <span class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
                <span><svgicon class="" name="order" width="30" height="30"></svgicon></span>
                <span>订单</span>
            </span>
            <span class="guide_item" :class="{on:'/profile'===$route.path}"@click="goTo('/profile')">
                <span><svgicon class="" name="profile" width="30" height="30" ></svgicon></span>
                <span>我的</span>
            </span>
        </div>
</template>

<script>
    export default {
        methods:{
          goTo(path){
            this.$router.replace(path)
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        position relative
    .foot_guide
        width 100%
        height 50px
        background-color antiquewhite
        position fixed
        bottom 0px
        display flex
        z-index 99
        .guide_item
            display flex
            flex 1
            flex-direction column
            text-decoration none
            align-items center
            justify-content center
            color #666
        .on
            color #009072


</style>