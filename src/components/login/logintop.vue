<template>
    <div class="title-box">
        <div class="pbx-title">
            <img style="width: 110px;height: 35px;margin-top: 9px;" src="../../../static/style/img/pbx-logo.png"/>
        </div>
        <div class="pbx-connect">
            <div style="margin-top: -2px;font-size: 16px;">
                <!--<img style="vertical-align:middle;width: 23px" src="../../../static/style/img/home.png"/>-->
                <router-link to="/home" style="cursor: pointer;color: #2585fd">
                    <i class="iconfont pbx-home1" style="font-size: 24px"></i>
                    HOME
                </router-link>
                <span class="inline-block" style="width: 65px;"></span>
                <!--<img style="vertical-align:middle;width: 23px" src="../../../static/style/img/help.png"/>-->
                <a @click="help()" style="cursor: pointer;color: #2585fd">
                    <i class="iconfont pbx-question" style="font-size: 24px"></i>
                    HELP
                </a>
                <span class="inline-block" style="width: 30px;"></span>
            </div>
        </div>
        <div class="dialog-box dialog-box2">
            <el-dialog width="25%" :show-close="false" :modal="false" :visible.sync="modal" style="margin-top: 100px;">
                <div slot="title"
                     style="width: 100%;height: 40px;line-height: 40px;background-color: #54A5F5;font-size: 20px">
                    <div class="place10"></div>
                    <span class="font-white">PBX Helpdesk</span>
                </div>
                <div style="width:100%;height:150px;margin-top: 10px" class="margin-center">
                    <div style="width: 90%;padding-top: 10px">
                        <i class="el-icon-phone" style="font-size: 22px;color: #54A5F5"></i>
                        <span style="color: #666;font-size: 16px">
                                Phone: 6950-1177
                            </span>
                    </div>
                    <div style="width: 90%;padding-top: 10px">
                        <i class="el-icon-message" style="font-size: 22px;color: #54A5F5"></i>
                        <span style="color: #666;font-size: 16px;">
                                Email: ap.helpdesk@asiapbx.com
                            </span>
                    </div>
                    <div style="width: 90%;padding-top: 20px">
                            <span style="color: #666;font-size: 16px;line-height: 26px">
                                Support Hours: 9am to 6pm from Monday to Friday (excluding Saturday, Sunday & Public Holiday)
                            </span>
                    </div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" size="mini" @click="closeHelp()">Close</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>

    export default {
        name: "logintop",
        data() {
            return {
                modal: false

            }
        },
        methods: {
            help: function () {
                this.modal = true;

            },
            closeHelp: function () {
                this.modal = false
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
        z-index: 9;
        -moz-box-shadow: 0 3px 7px rgba(0, 59, 157, 0.22);
        box-shadow: 0 3px 7px rgba(0, 59, 157, 0.22);
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
        height: 54px;
        color: #66b1ff;
        font-size: 16px;
        line-height: 54px;
        float: right;
        text-align: right;
        padding-right: 30px;
        font-weight: 400;
    }
</style>
