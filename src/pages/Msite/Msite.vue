<template>
    <div>
        <section>
        <HeaderTop title="富民路二段华阳街道">
            <span class="header_search" slot="left">
                <i class="iconfont icon-sousuo"><svgicon class="" name="search" width="30" height="30"></svgicon></i>
            </span>
            <span class="header_login" slot="right">
                 <span class="header_login_text">登陆|注册</span>
            </span>
        </HeaderTop>
        </section>
        <section class="show-swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ul class="list-container">
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                        </ul>

                    </div>
                    <div class="swiper-slide">
                        <ul class="list-container">
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                        </ul>

                    </div>
                    <div class="swiper-slide">
                        <ul class="list-container">
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                            <li class="list-container-item">
                                <img src="./images/foot.jpg">
                                <span>美食</span>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
        <section class="show-list">
            <ShopList/>
        </section>
    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
    import ShopList from "../../components/ShopList/ShopList.vue"
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
      mounted(){
        new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
        })
      },
        components:{HeaderTop,ShopList}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .show-swiper
        margin-top 50px
        padding-top 25px
        .list-container
            display flex

            .list-container-item
                flex 1
                display flex
                flex-direction column
                text-align center
                padding: 5px;
                border: 1px solid #ccc;
                box-shadow: 1px 1px 5px #ccc;
                width 20%
                border-radius: 5px;
    .show-list
        padding 5px


</style>