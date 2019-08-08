<template>
    <div class="title-box">
        <div class="pbx-title">
            <img style="width: 110px;height: 35px;margin-top: 9px;" src="../../../static/style/img/pbx-logo.png"/>
        </div>

        <div class="pbx-connect">
            <div class="text-center" style="width: 100%;">
                <div class="right" style="padding-top: 3px;color: #333;font-weight: 300;">
                    <div @click="item='1'" style="min-width: 90px;height: 52px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='1'}" class="mouse-hand inline-block hover "
                                  style="display:inline-block;min-width: 80px;height: 43px">
                                Home
                            </span>
                    </div>
                    <div @click="item='2'" style="min-width: 90px;height: 52px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='2'}" class="mouse-hand inline-block hover "
                                  style="display:inline-block;min-width: 80px;height: 43px">
                                E-Order
                            </span>
                    </div>
                    <div @click="item='3'" style="min-width: 90px;height: 52px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='3'}" class="mouse-hand inline-block hover "
                                  style="display:inline-block;min-width: 80px;height: 43px">
                                E-PO
                            </span>
                    </div>
                    <div @click="item='4'" style="min-width: 90px;height: 52px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='4'}" class="mouse-hand inline-block hover "
                                  style="display:inline-block;min-width: 80px;height: 43px">
                                E-Invoice
                            </span>
                    </div>
                    <div @click="item='5'"
                         style="min-width: 90px;height: 50px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='5'}" class="mouse-hand inline-block hover"
                                  style="display:inline-block;min-width: 70px;height: 43px">
                                E-Payment
                            </span>
                    </div>
                    <div @click="item='6'"
                         style="min-width: 90px;height: 50px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='6'}" class="mouse-hand inline-block hover"
                                  style="display:inline-block;min-width: 70px;height: 43px">
                                Financial
                            </span>
                    </div>
                    <div @click="item='7'"
                         style="min-width: 90px;height: 50px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='7'}" class="mouse-hand inline-block hover"
                                  style="display:inline-block;min-width: 70px;height: 43px">
                                PEPPOL
                            </span>
                    </div>
                    <div style="min-width: 90px;height: 50px;line-height: 50px;float: left;margin-left: 20px;margin-right: 50px;">
                            <span style="display:inline-block;min-width: 70px;height: 43px">
                                <el-button size="mini" type="primary" round @click="goLogin">
                                    Log In
                                    <i class="el-icon-d-arrow-right"></i>
                                </el-button>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { baseUrl } from 'common/env'

    export default {
        name: "top",
        data() {
            return {
                modal: false,
                item: "1",

            }
        },
        methods: {
            help: function() {
                this.modal = true;

            },
            closeHelp: function() {
                this.modal = false
            },
            goLogin: function() {
                window.open(baseUrl + '#/ui/login', '_blank')
            }
        }
    }
</script>

<style>
    .dialog-box .el-dialog__header {
        padding: 0;
    }

    .dialog-box2 .el-dialog__body {
        padding: 10px 10px 10px 10px;
    }
</style>

<style scoped>
    .title-box {
        width: 100%;
        border-bottom: solid 1px #cecece;
        height: 54px;
    }

    .pbx-title {
        display: inline-block;
        height: 54px;
        color: #66b1ff;
        padding-left: 30px;
        padding-top: 0;
        float: left;

    }
    .pbx-connect {
        display: inline-block;
        color: #66b1ff;
        font-size: 14px;
        float: right;
        text-align: right;
        font-weight: 400;
        width: 900px;
    }
</style>
