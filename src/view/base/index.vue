<template>
    <el-scrollbar ref="myScrollbar" style="height:100%;">
        <div class="width100">
            <Top></Top>
            <transition name="top">
                <Top v-show="show3" style="position: fixed;top:0;z-index: 9999;background-color: #fff;min-width: 1100px;"></Top>
            </transition>
            <el-carousel trigger="click" height="500px" style="width: 100%">
                <el-carousel-item>
                    <div class="banner-box">
                        <div class="margin-center font-white banner-box-content">
                            <div class="place150-h"></div>
                            <transition name="font">
                                <div v-show="showFont" style="font-size: 40px">
                                    PBX
                                </div>
                            </transition>
                            <br>
                            <transition name="font">
                                <div v-show="showFont2" style="font-size: 14px">
                                    Pracbiz, the leading retail supply chain<br> digitizer in Singapore and Malaysia <br>
                                </div>
                            </transition>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-box">
                        <div class="margin-center font-white banner-box-content">
                            <div class="place150-h"></div>
                            <div style="font-size: 40px">
                                PBX
                            </div>
                            <br>
                            <div style="font-size: 14px">
                                Pracbiz, the leading retail supply chain
                                <br> digitizer in Singapore and Malaysia <br>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="text-center flex-box font-blue" style="padding-top: 60px;height: 169px">
                <div class="item">
                        <div class="margin-center text-left item-chd">
                            <transition name="font">
                                <div v-show="showFont" class="item-title">
                                    Trading Made Easy
                                </div>
                            </transition>
                            <div></div>
                            <transition name="font">
                                <div v-show="showFont2" class="item-content">
                                    Increased Sales <br> and Earnings
                                </div>
                            </transition>
                        </div>

                </div>
                <div class="item">
                    <div class="margin-center text-left item-chd">
                        <transition name="font">
                            <div v-show="showFont" class="item-title">
                                Digitization
                            </div>
                        </transition>
                        <transition name="font">
                            <div v-show="showFont2" class="item-content">
                                Operational Efficiency <br> and Productivity Boost
                            </div>
                        </transition>
                    </div>

                </div>
                <div class="item">
                    <div class="margin-center text-left item-chd">
                        <transition name="font">
                            <div v-show="showFont" class="item-title">
                                Build Strength
                            </div>
                        </transition>
                        <transition name="font">
                            <div v-show="showFont2" class="item-content">
                                Better Trading Partner <br> Relationships
                            </div>
                        </transition>
                    </div>

                </div>
            </div>
            <div class="width100" style="background: #54A5F5">
                <div class="margin-center" style="width: 70%">
                    <div class="width100 flex-box" style="height: 640px;">
                        <div class="item" style="position: relative">
                            <div class="round-big midpoint ">
                                <div class=" round-mini round1" :class="{'gradient':show===1}">
                                    <div class="round-mini-content text-center mouse-hand" @mouseenter="show=1" @click="goMainService('service1')">
                                        E-Order
                                    </div>
                                </div>
                                <div class=" round-mini round2" :class="{'gradient':show===2}">
                                    <div class="round-mini-content text-center mouse-hand" @mouseenter="show=2" @click="goMainService('service2')">
                                        E-Invoice
                                    </div>
                                </div>
                                <div class=" round-mini round3" :class="{'gradient':show===3}">
                                    <div class="round-mini-content text-center mouse-hand" @mouseenter="show=3" @click="goMainService('service3')">
                                        PEPPOL
                                    </div>
                                </div>
                                <div class=" round-mini round4" :class="{'gradient':show===4}">
                                    <div class="round-mini-content text-center mouse-hand" @mouseenter="show=4" @click="goMainService('service4')">
                                        Financial
                                    </div>
                                </div>
                                <div class=" round-mini2 round5 " :class="{'gradient':show===5}">
                                    <div class="round-mini-content2 text-center mouse-hand" @mouseenter="show=5" @click="goMainService('service5')">
                                        E-PO
                                    </div>
                                </div>
                                <div class=" round-mini round6 " :class="{'gradient':show===6}">
                                    <div class="round-mini-content text-center mouse-hand" @mouseenter="show=6" @click="goMainService('service6')">
                                        E-Payment
                                    </div>
                                </div>
                                <div class="round-normal midpoint">
                                    <div class="round-small midpoint bg-white text-center">
                                        PBX
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item" style="position: relative">
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===1" class="transition-box text-center">
                                        <img src="../../../static/style/img/e-order.png"/>
                                        <div>
                                            E-Order
                                        </div>
                                        <div class="transition-box-content">
                                            Ordering made easy ... Any time, any where
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===2" class="transition-box text-center">
                                        <img src="../../../static/style/img/e-invoice.png"/>
                                        <div>
                                            E-Invoice
                                        </div>
                                        <div class="transition-box-content">
                                            No fuss presentation, always predictable, accurate and timely
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===3" class="transition-box text-center">
                                        <img src="../../../static/style/img/peppol.png"/>
                                        <div>
                                            PEPPOL
                                        </div>
                                        <div class="transition-box-content">
                                            Connection to Global PEPPOL network, enabling cross-border eTrade.
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===4" class="transition-box text-center">
                                        <img src="../../../static/style/img/financial.png"/>
                                        <div>
                                            Financial
                                        </div>
                                        <div class="transition-box-content">
                                            Automated, timely and accurate reporting, clean and easy
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===5" class="transition-box text-center">
                                        <img src="../../../static/style/img/e-po.png"/>
                                        <div>
                                            E-PO
                                        </div>
                                        <div class="transition-box-content">
                                            Efficient, but controlled ordering process with minimal risk.
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="midpoint product-box">
                                <transition name="el-zoom-in-center">
                                    <div v-show="show===6" class="transition-box text-center">
                                        <img src="../../../static/style/img/e-payment.png"/>
                                        <div>
                                            E-Payment
                                        </div>
                                        <div class="transition-box-content">
                                            Better cash flow management through standardized payments processes
                                        </div>
                                    </div>
                                </transition>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="width100">
                <div class="main-service-box">
                    <span>
                        MAIN SERVICE
                    </span>
                </div>
            </div>
            <div class="width100 service-eorder-box flex-box" ref="service1">
                <div class="item"></div>
                <div class="item text-center">

                    <div class="service-eorder-content">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            01
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/e-order.png"/>
                            <div>
                                E-Order
                            </div>
                            <div class="transition-box-content font-view">
                                Ordering made easy ... Any time, any where
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="width100 service-epo-box flex-box" ref="service5">
                <div class="item text-center">
                    <div class="service-epo-content right">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            02
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/e-po.png"/>
                            <div>
                                E-PO
                            </div>
                            <div class="transition-box-content font-view">
                                Efficient, but controlled ordering process with minimal risk
                            </div>
                        </div>

                    </div>
                </div>
                <div class="item ">


                </div>

            </div>
            <div class="width100 service-einvoice-box flex-box" ref="service2">
                <div class="item"></div>
                <div class="item text-center">

                    <div class="service-eorder-content">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            03
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/e-invoice.png"/>
                            <div>
                                E-Invoice
                            </div>
                            <div class="transition-box-content font-view">
                                No fuss presentation, always predictable, accurate and timely
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div class="width100 service-epa-box flex-box" ref="service6">
                <div class="item text-center">
                    <div class="service-epo-content right">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            04
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/e-payment.png"/>
                            <div>
                                E-Payment
                            </div>
                            <div class="transition-box-content font-view">
                                Better cash flow management through standardized payments processes
                            </div>
                        </div>

                    </div>
                </div>
                <div class="item ">


                </div>

            </div>
            <div class="width100 service-financial-box flex-box" ref="service4">
                <div class="item"></div>
                <div class="item text-center">

                    <div class="service-eorder-content">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            05
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/financial.png"/>
                            <div>
                                Financial
                            </div>
                            <div class="transition-box-content font-view">
                                Automated, timely and accurate reporting, clean and easy
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div class="width100 service-peppol-box flex-box" ref="service3">
                <div class="item text-center">
                    <div class="service-epo-content right">
                        <div class="text-right" style="font-size: 60px;color: #cecece;padding-right: 20px;">
                            06
                        </div>
                        <div style="width: 200px;" class="margin-center">
                            <div class="place120-h"></div>
                            <img src="../../../static/style/img/blue-logo/peppol.png"/>
                            <div>
                                PEPPOL
                            </div>
                            <div class="transition-box-content font-view">
                                Connection to Global PEPPOL network, enabling cross-border eTrade
                            </div>
                        </div>

                    </div>
                </div>
                <div class="item ">


                </div>

            </div>
            <div class="width100 bg-blue font-white" style="height: 260px">
                <div class="inline-block" style="width: 15%;">

                </div>
                <div class="text-left inline-block" style="width: 200px;">
                    <div style="font-size: 24px;margin-top: 48px">
                        Singapore
                    </div>
                    <div class="place24-h">

                    </div>
                    <div style="font-size: 14px">
                        PracBiz Pte Ltd<br>
                        1003 Bukit Merah Central<br>
                        #04-31 Technopreneur Centre<br>
                        Singapore 159836<br><br>

                        Tel: (65) 6275 6073<br>
                        Email: sales@pracbiz.com<br>
                    </div>
                </div>
                <div class="inline-block" style="width: 6%">

                </div>
                <div class="text-left inline-block" style="width: 200px;">
                    <div style="font-size: 24px;margin-top: 48px">
                        Malaysia
                    </div>
                    <div class="place24-h">

                    </div>
                    <div style="font-size: 14px">
                        PracBiz Sdn. Bhd.<br>
                        A-06-11, Glomac Damansara<br>
                        699 Jalan Damansara<br>
                        60000 Kuala Lumpur<br><br>
                        Tel: (603) 7732 6698<br>
                        Email: info@pracbiz.com<br>
                    </div>
                </div>
            </div>
            <div class="width100 font-white " style="height: 86px;background-color: #006ed4;font-size: 14px;">

                <div class="inline-block text-center" style="width: 55%;line-height: 84px">
                    <i class="iconfont pbx-banquan"></i> Copyright 2018 PracBiz Pte Ltd. All Rights Reserved
                </div>
                <div class="inline-block text-right" style="width: 25%;position: relative;">
                    <div style="position: absolute;left: 0;top:-28px;bottom: 0;right: 0">
                        <span class="mouse-hand" @click="openPrivacyPolicy">Privacy Policy</span>
                        | <span class="mouse-hand" @click="openTermsOfUse">Terms of Use</span><br><br>
                        PracBiz Pte Ltd UEN 200211011D
                    </div>
                </div>
            </div>
        </div>
        <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="page-component-up text-center" @click="uptotop">
                <i class="el-icon-caret-top font-blue"></i>
            </div>
        </transition>

    </el-scrollbar>
</template>

<script>
    import LoginBottom from '@/components/login/loginbottom'
    import Top from '@/components/home/top'
    import { baseUrl } from 'common/env'
    export default {
        name: "index",
        data() {
            return {
                show: 1,
                show2: false,
                show3: false,
                showFont: false,
                showFont2: false
            }
        },
        mounted: function () {
            // 监听（绑定）滚轮滚动事件
            window.addEventListener('scroll', this.handleScroll, true);

            this.$nextTick(function() {
                setTimeout(() => {
                    this.showFont = true
                    setTimeout(() => {
                        this.showFont2 = true
                    }, 100);
                },200)
            })
        },
        created: function() {
            setInterval(this.timer, 10000);
        },
        methods: {
            openPrivacyPolicy: function() {
                let url = baseUrl + "api/signUp/privacypolicy"
                window.open(url, "_blank", '')
            },
            openTermsOfUse: function() {
                let url = baseUrl + "api/signUp/termsofuse"
                let myWindow = window.open(url, "_blank", '')
                myWindow.document.title = 'PracBiz Group Website Terms of Use'
                //myWindow .document.write("<title>PracBiz Group Website Terms of Use</title>");
            },
            handleScroll: function() {
                if(this.$refs['myScrollbar'].wrap.scrollTop > 0){
                    this.show2 = true
                }else {
                    this.show2 = false
                }

                var scrollTop = this.$refs['myScrollbar'].wrap.scrollTop
                if(scrollTop > 60) {
                    this.show3 = true
                } else {
                    this.show3 = false
                }
            },
            timer: function() {
                this.show++
                if (this.show === 7) {
                    this.show = 1
                }

            },
            goMainService: function(ref) {
                this.$refs['myScrollbar'].wrap.scrollTop = this.$refs['' + ref].offsetTop

            },
            uptotop: function() {
                this.$refs['myScrollbar'].wrap.scrollTop = 0
            }
        },
        components: {
            LoginBottom,
            Top
        }
    }
</script>

<style scoped>
    .page-component-up{
        background-color: #fff;
        position: fixed;
        right: 100px;
        bottom: 150px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        cursor: pointer;
        transition: .3s;
        box-shadow: 0 0 6px rgba(0,0,0,.5);
        z-index: 5;
    }
    .service-eorder-content {
        width: 600px;
        height: 400px;
        background-color: #ffffff;
        border-radius: 10px;
        margin-top: 100px;
        color: #2775eb;
        font-size: 30px;
        box-shadow: 0 2px 24px 0 rgba(6, 129, 246, 0.2), 0 0 6px 0 rgba(6, 129, 246, 0.2);
    }

    .service-epo-content {
        width: 600px;
        height: 400px;
        background-color: #ffffff;
        border-radius: 10px;
        margin-top: 100px;
        margin-left: 50px;
        color: #2775eb;
        font-size: 30px;
        box-shadow: 0 2px 24px 0 rgba(6, 129, 246, 0.2), 0 0 6px 0 rgba(6, 129, 246, 0.2);
    }

    .service-peppol-box {
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg6.png") no-repeat right;
        background-size: contain;
    }

    .service-financial-box {
        margin-top: 70px;
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg5.png") no-repeat center;
        background-size: cover;
    }

    .service-epa-box {
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg4.png") no-repeat right;
        background-size: contain;
        margin-top: 60px;
    }

    .service-einvoice-box {
        margin-top: 70px;
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg3.png") no-repeat center;
        background-size: cover;
    }

    .service-eorder-box {
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg1.png") no-repeat center;
        background-size: contain;
    }

    .service-epo-box {
        height: 614px;
        background: url("../../../static/style/img/blue-logo/bg2.png") no-repeat right;
        background-size: contain;
        margin-top: 60px;
    }

    .main-service-box {
        width: 50%;
        height: 234px;
        font-size: 40px;
        color: #0681f6;
        text-align: center;
        line-height: 234px;
        font-weight: 500;
    }

    .transition-box-content {
        font-size: 14px;
        line-height: 20px;
    }

    .transition-box {
        font-size: 30px;
        color: #ffffff;
        line-height: 40px;
    }

    .product-box {
        width: 200px;
        height: 200px;
    }

    .gradient {
        box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.5), 0 0 1px 0 rgba(255, 255, 255, 0.5) !important;
        transition: box-shadow 0.5s;
        -moz-transition: box-shadow 0.5s; /* Firefox 4 */
        -webkit-transition: box-shadow 0.5s; /* Safari 和 Chrome */
        -o-transition: box-shadow 0.5s; /* Opera */
    }

    .round-mini-content {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 50%;
        line-height: 102px;
    }

    .round-mini-content2 {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 50%;
        line-height: 62px;
    }

    .round1 {
        top: -26px;
        font-size: 18px;
        color: #ff8111;
    }

    .round2 {
        left: 230px;
        top: -36px;
        font-size: 18px;
        color: #cf48df;
    }

    .round3 {
        left: 320px;
        top: 80px;
        font-size: 18px;
        color: #ff5656;
    }

    .round4 {
        left: 290px;
        top: 260px;
        font-size: 18px;
        color: #fdb825;
    }

    .round5 {
        left: 90px;
        top: 320px;
        font-size: 18px;
        color: #ff2a70;
    }

    .round6 {
        left: -50px;
        top: 200px;
        font-size: 18px;
        color: #00c3df;
    }

    .round-mini {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .round-mini2 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .midpoint {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        font-size: 40px;
        line-height: 127px;
        color: #2585fd
    }

    .round-big {
        width: 360px;
        height: 360px;
        border-radius: 50%;
        border: solid 1px #ffffff;
        /*-webkit-animation: spin 1s linear 1s 5 alternate;*/
        /*animation: spin 20s linear infinite;*/
    }

    .round-normal {
        width: 236px;
        height: 236px;
        border-radius: 50%;
        border: solid 1px #ffffff;
    }

    .round-small {
        width: 127px;
        height: 127px;
        border-radius: 50%;
        border: solid 1px #ffffff;
    }

    .bg-blue {
        background-color: #54A5F5;
    }

    .bg-white {
        background-color: #ffffff;
    }

    .flex-box {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .item {
        flex: 1;
    }

    .item-chd {
        width: 230px;
    }

    .item-title {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .item-content {
        font-size: 20px;
        color: #666666;
        margin-bottom: 60px;
    }

    .banner-box {
        width: 100%;
        background: url("../../../static/style/img/banner.png") center no-repeat;
        min-height: 500px;
    }

    .banner-box-content {
        width: 80%;
        height: 300px
    }

    .top-enter-active{
        animation:top-in 0.5s;
        position: fixed;
        z-index: 9999;
        background-color: #fff;
        top: 0;
    }

    .top-leave-active{
        animation:top-out 0.5s;
        position: fixed;
        z-index: 9999;
        background-color: #fff;
        top: -54px;
    }

    @keyframes top-in {
        from{
            top: -54px;
        }
       to{
           top: 0;
       }
    }

    @keyframes top-out {
        from{
            top: 0;
        }
        to{
            top: -54px;
        }
    }

    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .font-enter-active {
        animation: font-in 0.6s;
    }

    @keyframes font-in{
        from{
            transform: translate(0, 60px);
        }
        to{}
    }
</style>
