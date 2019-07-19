<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        background-color #02a774
        width 100%
        height 60px
        line-height 30px
        position fixed
        left 0px
        top:0px
        padding 10px
        text-align center
        z-index 99
        display flex
        .header_title
            width 60%
            text-align center
        .header_search
            width 20%
        .header_login
            width 20%
            float right
            padding-right 15px



</style>