<template>
    <el-container style="height: 100%">
        <el-header class="el-header-box"
                   style="height: 30px;background-color: #f5f5f5;border-bottom: solid 1px #cecece;">
            <div style="display: flex;width: 95%;margin: 0 auto">
                <div class=" text-left "
                     style="width: 350px;height: 30px;line-height: 30px;font-size: 12px;font-weight: 400">
                    <span class="text-title-normal mouse-hand">
                        <i class="iconfont pbx-home"></i>
                        Home
                    </span>
                    <div class="show-none inline-block"
                         style="min-width: 50px;height: 29px;line-height: 29px;margin:1px 10px;position: relative;">
                        <span class="mouse-hand user-info-box inline-block"
                                  style="width:100%;font-size: 12px;font-weight: 300;color: #575757;min-width: 40px;padding: 0 7px;">
                            <i class="el-icon-service" style="font-size: 14px"></i>
                            Help
                        </span>
                        <div class="border-normal-left border-normal-bottom border-normal-right none bw"
                             style="width: 165px;height: 82px;position: absolute;margin-left: -1px;z-index: 999;margin-top: -2px">
                            <div style="padding-left: 15px;padding-top: 10px;">
                                <i class="iconfont pbx-1101dianhua"></i>
                                <span class="font-400"><span class="place10"></span>1234-1234567890</span>
                            </div>
                            <div style="padding-left: 15px;">
                                <i class="iconfont pbx-xiaoxitongzhi"></i>
                                <span class="font-400"><span class="place10"></span>pracbiz@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="width: 98%;color: #6c6c6c">
                    <div class="show-none"
                         style="height: 29px;line-height: 29px;float: right;margin:1px 10px;">
                        <span class="mouse-hand user-info-box inline-block"
                              style="width:100%;font-size: 12px;font-weight: 300;color: #575757;min-width: 50px;padding: 0 7px;">
                            <i class="iconfont pbx-icon_zhanghao"></i>
                            <span class=" font-500">
                                User 134
                            </span>
                        </span>
                        <div class="border-normal-left border-normal-bottom border-normal-right  none bw"
                             style="width: 300px;height: 80px;position: absolute;margin-left: -245px;z-index: 999;margin-top: -2px">
                            <div style="width: 100%;height: 80px" class="">
                                <div class="left" style="margin-top: 20px;margin-left: 20px;">
                                    <img style="width: 40px" src="../../../static/style/img/default-user.png"/>
                                </div>
                                <div class="left" style="margin-top:12px;margin-left: 20px;font-size: 14px;">
                                    <div class="text-left" style="height: 24px;position: relative">
                                        User 134
                                        <div @click="logout" class="mouse-hand hover-fount"
                                             style="position: absolute;top: 0;right: 0;font-size: 10px;">
                                            Logout
                                        </div>
                                    </div>
                                    <div style="height: 24px">
                                        Buyer company name
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="show-none"
                         style="height: 29px;line-height: 29px;float: right;margin:1px 10px;">

                        <span class="mouse-hand user-info-box inline-block" @click="handleClick('1')"
                              style="width:100%;font-size: 12px;font-weight: 300;color: #575757;padding: 0 7px;">
                            <i class="el-icon-message" style="font-size: 14px"></i>
                            Message
                            <span class="font-red font-500">

                            </span>
                        </span>
                        <div class="border-normal-left border-normal-bottom border-normal-right none bw"
                             style="width: 190px;height: 149px;position: absolute;margin-left: -137px;z-index: 999;font-size: 12px;font-weight:400;margin-top: -2px">
                            <div style="width: 100%;padding-top: 10px;">

                                <table style="width: 100%;text-align: left;margin-left: 20px;">
                                    <tbody>
                                    <tr class="mouse-hand" @click="handleClick('2')">
                                        <td width="60%">
                                            System Messages
                                        </td>
                                        <td>
                                            <el-badge :value="200" :max="99" class="item">

                                            </el-badge>
                                        </td>
                                    <tr class="mouse-hand" @click="handleClick('3')">
                                        <td width="6%">
                                            Order Messages
                                        </td>
                                        <td>
                                            <el-badge :value="12" :max="99" class="item">

                                            </el-badge>
                                        </td>
                                    </tr>
                                    <tr class="mouse-hand border-normal-bottom" @click="handleClick('4')">
                                        <td width="60%">
                                            Account Messages  <span class="font-red"></span>
                                        </td>
                                        <td>
                                            <el-badge :value="2" :max="99" class="item">

                                            </el-badge>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div style="width: 100%;height: 2px;" class="border-normal-bottom" ></div>
                                <div style="width: 100%;height: 2px;" class="text-center">
                                    <el-button @click="handleClick('1')"  type="text" size="small"> View All
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="height: 29px;line-height: 29px;float: right;margin:1px 10px;">
                        <span class="mouse-hand inline-block link-hover font-link"
                              style="width:100%;font-size: 12px;font-weight: 400;">
                            <i class="iconfont pbx-fabusekuai" style="font-size: 14px"></i>
                            <a href="http://192.168.0.111:8080/user-center/#/ui/layout/message">User Center</a>
                        </span>
                    </div>

                </div>
            </div>
        </el-header>
        <el-header class="el-header-box"
                   style="min-height: 63px;background-color: #ffffff;border-bottom: solid 1px #cecece;">
            <div style="display: flex;">
                <div style="width: 150px;color: #66b1ff;text-align: left;height: 63px;">
                    <img style="width: 128px;height:40px;margin-top: 10px;"
                         src="../../../static/style/img/pbx-logo.png"/>
                </div>


                <div class="text-center" style="width: 90%;">
                    <div class="right" style="padding-top: 18px;color: #666;font-weight: 300;">
                        <div @click="item='1'" style="min-width: 90px;height: 52px;line-height: 50px;float: left;">
                            <span :class="{'item_active':item=='1'}" class="mouse-hand inline-block hover "
                                  style="display:inline-block;font-size: 18px;min-width: 80px;height: 43px">
                                E-Order
                            </span>
                        </div>
                        <div @click="item='2'"
                             style="min-width: 90px;height: 50px;line-height: 50px;float: left;margin-left: 20px;">
                            <span :class="{'item_active':item=='2'}" class="mouse-hand inline-block hover"
                                  style="display:inline-block;font-size: 18px;min-width: 70px;height: 43px">
                                E-Payment
                            </span>
                        </div>
                        <div @click="item='3'"
                             style="min-width: 90px;height: 50px;line-height: 50px;float: left;margin-left: 20px;margin-right: 50px;">
                            <span :class="{'item_active':item=='3'}" class="mouse-hand inline-block hover"
                                  style="display:inline-block;font-size: 18px;min-width: 70px;height: 43px">
                                PEPPOL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </el-header>
        <el-container style="height: 100%;">

            <div style="height:105%;background-color: #54A5F5">
                <el-scrollbar style="height:100%;">
                    <SlideMenu></SlideMenu>
                </el-scrollbar>
            </div>
            <!--<el-aside style="border-right: solid 1px #fff;width: 200px;" >-->
            <!---->
            <!--</el-aside>-->
            <!--<el-main>-->
            <!---->
            <!--</el-main>-->

            <el-container>
                <el-header :class="classA"
                           style="padding-top: 12px;padding-bottom: 5px;height: 42px;overflow-x: auto;z-index: 99">
                    <div style="font-size: 14px;color:#546d7e;font-weight: bold;">
                        <span>
                          {{menuOne}}
                        </span>
                        <span v-show="menuTwo" style="display: inline-block;margin: 0 5px;">
                          >>
                        </span>
                        <span>
                           {{menuTwo}}
                        </span>
                        <span v-show="menuThird" style="display: inline-block;margin: 0 5px;">
                          >>
                        </span>
                        <span>
                           {{menuThird}}
                        </span>
                    </div>
                </el-header>

                <router-view>
                </router-view>

                <!--<el-footer  style="padding: 0;height: 60px; line-height: 60px;border-top:solid 1px #cecece;">-->
                <!--<p style="width: 60%;color: #58666e;margin: 0 auto;text-align: center;font-size: 14px;font-family: 'Rubik', sans-serif;">-->
                <!--Copyright © PracBiz Pte Ltd UEN 200211011D-->
                <!--| <a href="#" class="font-500 link-hover">Privacy Policy</a>-->
                <!--| <a href="#" class="font-500 link-hover">Terms of Use</a>-->
                <!--</p>-->
                <!--</el-footer>-->


            </el-container>

        </el-container>
        <el-dialog :show-close="false" title="My Profile" :visible.sync="dialogFormVisible">
            <el-form :model="myProfileForm" :rules="rules2" ref="myProfileForm">
                <el-form-item label="Login ID :"

                              :label-width="formLabelWidth">
                    <el-input v-model="myProfileForm.loginId" auto-complete="off" style="width: 200px"
                              disabled></el-input>
                </el-form-item>
                <el-form-item label="Email :"
                              prop="email"
                              :rules="[
                        { required: true, message: 'Company Name is required.'},
                        {type: 'email', message: 'Please input the correct email address.', trigger: ['blur', 'change']}
                      ]"
                              :label-width="formLabelWidth">
                    <el-input maxlength="100" v-model="myProfileForm.email" auto-complete="off"
                              style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="	Change Password :" :label-width="formLabelWidth">
                    <el-radio v-model="myProfileForm.isChangePwd" label="1">Yes</el-radio>
                    <el-radio v-model="myProfileForm.isChangePwd" label="2">No</el-radio>
                </el-form-item>
                <el-form-item v-show="myProfileForm.isChangePwd == '1'" label="Current Password :"
                              prop="currentPwd"
                              :rules="[
                        { required: myProfileForm.isChangePwd == '1'?true:false, message: 'Current Password is required.'}
                      ]"
                              :label-width="formLabelWidth">
                    <el-input maxlength="150" type="password" v-model.trim="myProfileForm.currentPwd"
                              auto-complete="off"
                              style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item v-show="myProfileForm.isChangePwd == '1'" label="New Password :"
                              prop="newPwd"
                              :label-width="formLabelWidth">
                    <el-input maxlength="150" type="password" v-model.trim="myProfileForm.newPwd" auto-complete="off"
                              style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item v-show="myProfileForm.isChangePwd == '1'" label="	Confirm Password :"
                              prop="confirmPwd"
                              :label-width="formLabelWidth">
                    <el-input maxlength="150" type="password" v-model.trim="myProfileForm.confirmPwd"
                              auto-complete="off"
                              style="width: 250px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelFormSubmit('myProfileForm')">Cancel</el-button>
                <el-button type="primary" @click="submit('myProfileForm')">Submit</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>

<script>
    // import SideMenu from 'components/menu/side-menu'
    //  import BuyerList from '@/components/buyer/buyerList'
    import {post} from 'api/post'
    import SlideMenu from 'components/menu/side-menu'
    import {lvlOneMenu, lvlTwoMenu, lvlThirdMenu} from 'common/js/util/menuMap'
    import LoginBottom from '@/components/login/loginbottom'

    export default {
        menuOne: "",
        menuTwo: "",
        menuThird:"",
        name: "layout",
        components: {
            LoginBottom,
            SlideMenu
        },
        data() {
            var validatePass = (rule, value, callback) => {
                if (this.myProfileForm.isChangePwd == "1") {
                    if (value === '') {
                        callback(new Error('New Password is required.'));
                    } else {
                        if (this.myProfileForm.confirmPwd !== '') {
                            this.$refs.myProfileForm.validateField('confirmPwd');
                        }
                        callback();
                    }
                } else {
                    callback();
                }

            };
            var validatePass2 = (rule, value, callback) => {
                if (this.myProfileForm.isChangePwd == "1") {
                    if (value === '') {
                        callback(new Error('Please enter your password again.'));
                    } else if (value !== this.myProfileForm.newPwd) {
                        callback(new Error('The two passwords are inconsistent.'));
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            };
            return {
                classA: "border-shadow",
                item: "3",
                dynamicTags: [
                    {name: '标签一', type: 'success'},
                    {name: '标签二', type: 'info'},
                    {name: '标签三', type: 'info'},
                    {name: '标签四', type: 'info'},
                    {name: '标签五', type: 'info'}
                ],
                dialogFormVisible: false,
                formLabelWidth: "150px",
                showMyProfile: false,
                loginId: "",
                myProfileForm: {
                    loginId: "",
                    email: "",
                    isChangePwd: "2",
                    confirmPwd: "",
                    newPwd: "",
                    currentPwd: ""
                },
                pwdForm: {
                    currentPwd: ""
                },
                gridData: [
                    {
                        desc: "About invoice detail , you have 1 message unread .",
                        date: "2018-01-01"
                    },
                    {
                        desc: "About invoice detail , you have 1 message unread .",
                        date: "2018-01-01"
                    },
                    {
                        desc: "About invoice detail , you have 1 message unread .",
                        date: "2018-01-01"
                    }
                ],
                rules2: {
                    newPwd: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    confirmPwd: [
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            }
        },
        watch: {
            $route(to, from) {
                //this.classA = "border-shadow";

                let path = this.$route.path;
                let arr = path.split("/")

                let key = arr[arr.length - 1]

                this.menuOne = lvlOneMenu[key];
                this.menuTwo = lvlTwoMenu[key];
                this.menuThird = lvlThirdMenu[key];
            }
        },
        created() {
            let path = this.$route.path;
            let arr = path.split("/")
            let key = arr[arr.length - 1]
            this.menuOne = lvlOneMenu[key];
            this.menuTwo = lvlTwoMenu[key];
            this.menuThird = lvlThirdMenu[key];
            // if (sessionStorage.getItem("userInfo")) {
            //   this.$store.commit("setUserInfo", sessionStorage.getItem("userInfo"))
            // } else {
            //   this.$store.commit("setUserInfo", null)
            // }
            //
            // if (JSON.parse(this.$store.getters.userInfo).isAdmin == "Y") {
            //   this.showMyProfile = true
            //   this.getuserProfile();
            // }
        },
        mounted() {
            //消息通知方法
            // this.open();
            // setInterval(this.open, 500000);

            //window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            goCompany() {
                this.$router.push("/ui/layout/profile");
            },
            handleScroll(e) {
                if (e.target.scrollTop == 0) {
                    this.classA = "border-shadow";
                    return
                }
                if (e.srcElement.className != "el-aside") {
                    this.classA = "border-shadow2";
                }
                // console.log(e.target.scrollTop)
            },
            handleClick(e) {
                // this.$router.push({path: '/ui/layout/message', query: {messageType: e}});
                window.location.href = "http://192.168.0.111:8080/user-center/#/ui/layout/message"
            },
            open() {
                const h = this.$createElement;

                this.$notify.info({
                    title: 'Notice',
                    message: 'Message : you have an unread notice.'
                });
            },
            tagSkipUrl: function (e) {
                console.log(e)
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            handleCommand: function (command) {
                // if (command == "1") {
                //   this.dialogFormVisible = true
                // }
                if (command == "2") {
                    this.$router.push("/ui/login");
                }

            },
            logout: function () {
                this.$router.push("/ui/login");
            },
            submit: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.pwdForm.currentPwd = this.myProfileForm.currentPwd

                        var oldPwd = JSON.parse(sessionStorage.getItem("userInfo")).loginPwd

                        if (this.myProfileForm.isChangePwd == '1') {
                            post('encryptPwd', this.pwdForm).then((res) => {
                                console.log(res)
                                if (res.retCode == "000000") {
                                    if (oldPwd != res.result.encryptPwd) {
                                        this.$message.error("Current password verification is failed.");
                                    } else {
                                        post('admin/chg', this.myProfileForm).then((res) => {
                                            console.log(res)
                                            if (res.retCode == "000000") {
                                                //需要添加验证原密码的代码
                                                if (this.myProfileForm.isChangePwd == '1') {
                                                    this.$message.success('The password of my profile has been updated , please login again. ')
                                                    this.$router.push("/ui/login");
                                                } else {
                                                    this.$message.success('My Profile has been updated.')
                                                    this.myProfileForm.email = res.result.email


                                                    var _userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
                                                    _userInfo.email = res.result.email
                                                    sessionStorage.removeItem('userInfo')
                                                    sessionStorage.setItem("userInfo", JSON.stringify(_userInfo))
                                                    this.$store.dispatch("setUserInfo", JSON.stringify(_userInfo))
                                                }


                                                this.dialogFormVisible = false;
                                            } else if (res.retCode == "000009") {
                                                this.$message.error(res.retMsg);
                                            } else if (res.retCode == "200001") {
                                                this.$message.error(res.retMsg);
                                            } else if (res.retCode == "401001") {
                                                this.$message.error("Login timeout, please login again.");
                                                this.dialogFormVisible = false;
                                                this.$router.push("/ui/login");
                                            }
                                            else {
                                                this.$message.error(res.retMsg);
                                                console.log("error3")
                                            }

                                        })
                                    }


                                } else if (res.retCode == "000009") {
                                    this.$message.error(res.retMsg);
                                } else if (res.retCode == "200001") {
                                    this.$message.error(res.retMsg);
                                } else if (res.retCode == "401001") {
                                    this.$message.error(res.retMsg);
                                }
                                else {
                                    this.$message.error(res.retMsg);
                                    console.log("error3")
                                }

                            })
                        } else {
                            post('admin/chg', this.myProfileForm).then((res) => {
                                console.log(res)
                                if (res.retCode == "000000") {
                                    //需要添加验证原密码的代码
                                    if (this.myProfileForm.isChangePwd == '1') {
                                        this.$message.success('My Profile  has been updated , please login again. ')
                                        this.$router.push("/ui/login");
                                    } else {
                                        this.$message.success('My Profile has been updated.')
                                        this.myProfileForm.email = res.result.email


                                        var _userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
                                        _userInfo.email = res.result.email
                                        sessionStorage.removeItem('userInfo')
                                        sessionStorage.setItem("userInfo", JSON.stringify(_userInfo))
                                        this.$store.dispatch("setUserInfo", JSON.stringify(_userInfo))
                                    }


                                    this.dialogFormVisible = false;
                                } else if (res.retCode == "000009") {
                                    this.$message.error(res.retMsg);
                                } else if (res.retCode == "200001") {
                                    this.$message.error(res.retMsg);
                                } else if (res.retCode == "401001") {
                                    this.$message.error("Login timeout, please login again.");
                                    this.dialogFormVisible = false;
                                    this.$router.push("/ui/login");
                                }
                                else {
                                    this.$message.error(res.retMsg);
                                    console.log("error3")
                                }

                            })
                        }


                    } else {
                        console.log('error invalid!');
                        return false;
                    }
                })
                //this.dialogFormVisible = false
            },
            cancelFormSubmit: function (formName) {
                this.dialogFormVisible = false
                this.$refs[formName].resetFields();

            },
            getuserProfile: function () {
                var _userInfo = JSON.parse(this.$store.getters.userInfo)
                console.log(_userInfo)
                this.myProfileForm.loginId = _userInfo.loginId
                this.myProfileForm.email = _userInfo.email
            }
        }
    }
</script>

<style scoped>
    .hover:hover {
        color: #54A5F5;
        border-bottom: solid #54A5F5 3px;
    }

    .item_active {
        color: #54A5F5;
        border-bottom: solid #54A5F5 3px;
    }

    .user-logo {
        width: 32px;
        height: 60px;
        display: inline-block;
        border-radius: 10px;
        background: url('../../../static/style/img/default-user.png') center no-repeat;
        background-size: 32px 32px;
    }

    .user-info-box:hover {
        background-color: #fff;
    }

    a {
        text-decoration: none;
    }

    .router-link-active {
        text-decoration: none;
    }

    .mouse-hand {
        cursor: pointer;
    }

    .el-badge__content.is-fixed {
        top: 30px;
    }

    .table-title {
        width: 100%;
        min-height: 40px;
        font-size: 14px;
        border: 1px solid #ebeef5;
        line-height: 40px;
        background-color: rgb(234, 236, 239);
        color: #54A5F5;
        font-weight: 600;
    }

    .el-header-box {
        color: #333;
        text-align: center;
        /*line-height: 80px;*/
    }

    .el-aside {
        height: 100%;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
        /*background-color: #54A5F5;*/
        background-color: #54A5F5;
    }

    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
        background-color: #54A5F5;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-form-item__label {
        width: 200px;
    }


</style>
