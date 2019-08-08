<template>
  <div style="width:100%;height:100%;overflow-y: auto;margin-bottom: 10px;">
    <div class="table-title-font">
      <el-form ref="form" :model="form" :rules="rules2" label-width="250px" class="demo-ruleForm">
        <!--<el-form-item label="Company Name :"-->
                      <!--prop="buyerName"-->
                      <!--:rules="[-->
                        <!--{ required: true, message: 'Company Name is required.'}-->
                      <!--]">-->
          <!--<el-input maxlength="100" style="width: 500px" v-model.trim="form.buyerName" size="small" :disabled="isAdmin"></el-input>-->
        <!--</el-form-item>-->
        <el-collapse v-model.trim="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="collspan-title" style="height: 30px;line-height: 30px">
                <div style="width:80%;margin-left: 20px;font-size: 13px">
                 Contact Infomation
                </div>
              </div>
            </template>

            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Buyer Name :
                </span>
                  </template>
                  <span class="view-font-color">dasdasadasad</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Login ID :
                </span>
                  </template>
                  <span class="view-font-color">dasdadadasda</span>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Title :
                </span>
                  </template>
                  <span class="view-font-color">dasdasadasad</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Gender :
                </span>
                  </template>
                  <span class="view-font-color">dasdadadasda</span>
                </el-form-item>
              </el-col>
            </el-row>


            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Name :
                </span>
                  </template>
                  <span class="view-font-color">dasdasadasad</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Email Address :
                </span>
                  </template>
                  <span class="view-font-color">dasdadadasda</span>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Telephone :
                </span>
                  </template>
                  <span class="view-font-color">dasdasadasad</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Fax :
                </span>
                  </template>
                  <span class="view-font-color">dasdadadasda</span>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Mobile :
                </span>
                  </template>
                  <span class="view-font-color">323232323</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Active :
                </span>
                  </template>
                  <span class="view-font-color">Yes</span>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="24" style="padding-left: 5px;">
              <el-col :span="11" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Mobile :
                </span>
                  </template>
                  <span class="view-font-color">323232323</span>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="height: 40px">
                <el-form-item>
                  <template slot="label">
                <span style="font-size: 13px">
                 Block:
                </span>
                  </template>
                  <span class="view-font-color">Yes</span>
                </el-form-item>
              </el-col>
            </el-row>


          </el-collapse-item>

        </el-collapse>

      </el-form>

    </div>


  </div>
</template>

<script>
  import {post} from 'api/post'

  export default {
    name: "editBuyer",
    data() {
      var validateNum = (rule, value, callback) => {
        var reg =  /^[0-9]+$/
        if (value === '') {
          callback(new Error('Phone Number is required.'));
        } else if (!reg.test(value)) {
          callback(new Error('Please enter the correct telephone number.'));
        } else {
          callback();
        }
      }

      return {
        activeNames: ["1", "2", "3", "4"],
        fileList2: [],
        rules2: {
          telNo: [
            {validator: validateNum, trigger: 'blur'}
          ],
          'adminInfo.adminContactTelNo': [
            {validator: validateNum, trigger: 'blur'}
          ],
          'bizInfo.bizContactTelNo': [
            {validator: validateNum, trigger: 'blur'}
          ],
          'financeInfo.financeContactTelNo': [
            {validator: validateNum, trigger: 'blur'}
          ],
          'logisticsInfo.logisticsContactTelNo': [
            {validator: validateNum, trigger: 'blur'}
          ]
        },
        buyerCode: "",
        isAdmin: false,
        valiEmail1: false,
        valiEmail2: false,
        valiEmail3: false,
        valiEmail4: false,
        cannotsubmit: true,
        form: {
          buyerName: "",
          address1: "",
          address2: "",
          address3: "",
          address4: "",
          telNo: "",
          fax: "",
          postalCode: "",
          bizRegNo: "",
          gstRegNo: "",
          loginPwd: "",
          isAdmin: false,
          adminInfo: {
            adminContractName: "",
            adminContractDesignation: "",
            adminContractTelNo: "",
            adminContractEmail: "",
            adminContractEmailConfirmed: ""
          },
          bizInfo: {
            bizContractName: "",
            bizContractDesignation: "",
            bizContractTelNo: "",
            bizContractEmail: "",
            bizContractEmailConfirmed: ""
          },
          financeInfo: {
            financeContractName: "",
            financeContractDesignation: "",
            financeContractTelNo: "",
            financeContractEmail: "",
            financeContractEmailConfirmed: ""
          },
          logisticsInfo: {
            logisticsContractName: "",
            logisticsContractDesignation: "",
            logisticsContractTelNo: "",
            logisticsContractEmail: "",
            logisticsContractEmailConfirmed: ""
          }
        },
        mailForm: {
          loginId: "",
          buyerCode: ""
        },
        searchBuyerInfoForm: {
          loginId: "",
          buyerCode: ""
        }
      }
    },
    computed: {

    },
    created() {
      console.log("created")



    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      getBuyerInfo: function (p1, p2) {
        this.searchBuyerInfoForm.loginId = p1
        this.searchBuyerInfoForm.buyerCode = p2

        post('buyer/queryBuyerInfo', this.searchBuyerInfoForm).then((res) => {
          console.log(res)
          if (res.retCode == "000000") {
            this.form = res.result

            var _usrInfo = JSON.parse(this.$store.getters.userInfo)
            this.form.isAdmin = _usrInfo.isAdmin
            sessionStorage.removeItem('userInfo')
            sessionStorage.setItem("userInfo", JSON.stringify(this.form));
            this.$store.dispatch("setUserInfo", JSON.stringify(this.form));

            if (JSON.parse(this.$store.getters.userInfo).isAdmin == "Y") {
              if (res.result.adminInfo.adminContactEmailConfirmed == 'Y') {
                this.valiEmail1 = true
              }
              if (res.result.bizInfo.bizContactEmailConfirmed == 'Y') {
                this.valiEmail2 = true
              }
              if (res.result.financeInfo.financeContactEmailConfirmed == 'Y') {
                this.valiEmail3 = true
              }
              if (res.result.logisticsInfo.logisticsContactEmailConfirmed == 'Y') {
                this.valiEmail4 = true
              }
            }

          } else if (res.retCode == "000009") {
            this.$message.error(res.retMsg);
          } else if (res.retCode == "200001") {
            this.$message.error(res.retMsg);
          } else if (res.retCode == "401001") {
            this.$message.error("Login timeout, please login again.");
            this.$router.push("/ui/login");
          }
          else {
            this.$message.error(res.retMsg);
            console.log("error3")
          }
        })
      },
      handleClick: function (e) {
        this.$router.push({
          path: '/ui/layout/editBuyer', query: {
            buyerCode: e.buyerCode
          }
        })
      },
      handleChange: function () {

      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            post('buyer/chg', this.form).then((res) => {
              console.log(res)
              if (res.retCode == "000000") {
                this.$message.success("Modify buyer infomation successfully.");
                // var _usrInfo = JSON.parse(this.$store.getters.userInfo)
                // var loginId = sessionStorage.getItem("loginId")
                // this.getBuyerInfo(loginId, _usrInfo.buyerCode)

                sessionStorage.removeItem('userInfo')
                sessionStorage.setItem("userInfo", JSON.stringify(this.form));
                this.$store.dispatch("setUserInfo", JSON.stringify(this.form));

              } else if (res.retCode == "000009") {
                this.$message.error(res.retMsg);
              } else if (res.retCode == "200001") {
                this.$message.error(res.retMsg);
              } else if (res.retCode == "401001") {
                this.$message.error("Login timeout, please login again.");
                this.$router.push("/ui/login");
              }
              else {
                this.$message.error(res.retMsg);
                console.log("error3")
              }

            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      validatEmail: function (i) {
        console.log(i)
        // var html="";
        // html += '<p class="p_show" id="add_'+data[i].areaId+'" onclick="chooseDetail('+data[i].areaId+','+addressNum+',\''+data[i].name+'\')">'+data[i].name+'</p >';

        if (i == 1) {
          this.mailForm.adminInfo = this.form.adminInfo;
        } else if (i == 2) {
          this.mailForm.bizInfo = this.form.bizInfo;
        } else if (i == 3) {
          this.mailForm.financeInfo = this.form.financeInfo;
        } else if (i == 4) {
          this.mailForm.logisticsInfo = this.form.logisticsInfo;
        }

        console.log(this.mailForm)


        post('email/send', this.mailForm).then((res) => {
          console.log(res)
          if (res.retCode == "000000") {

            var _buyerCode = JSON.parse(this.$store.getters.userInfo).buyerCode
            var loginId = sessionStorage.getItem("loginId")
            this.getBuyerInfo(loginId, _buyerCode)

            this.$message.success("Verify that the message has been sent. Please click confirm in the mailbox.");

          } else if (res.retCode == "000009") {
            this.$message.error(res.retMsg);
          } else if (res.retCode == "200001") {
            this.$message.error(res.retMsg);
          } else if (res.retCode == "401001") {
            this.$message.error("Login timeout, please login again.");
            this.$router.push("/ui/login");
          }
          else {
            this.$message.error(res.retMsg);
            console.log("error3")
          }
        })
      }
    }
  }
</script>
<style>
  .el-collapse-item__wrap{
    padding-left: 10px;
  }
  .el-col{
    font-weight: 500;
  }
</style>
<style scoped>

  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border: solid 1px  #409EFF;
  }


  .table-title {
    width: 98%;
    height: 30px;
    margin: 10px auto auto auto;
    font-size: 12px;
    border: 1px solid #ebeef5;
    line-height: 30px;
    background-color: #71A03E;
    color: #fff;
    font-weight: 600;
  }

  .table-title-font {
    width: 98%;
    height: 10px;
    line-height: 30px;
    margin: 0 auto auto auto;
    font-size: 18px;
    font-weight: 600;
    color: #606266;
  }

  .form-box {
    width: 98%;
    margin: 20px auto auto auto;
  }

  .el-form-item {
    margin-bottom: 20px;
  }

  .el-collapse-item__header {
    color: red;
  }

  .collspan-title {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background-color: #54A5F5
  }

  .el-icon-success {
    color: #67c23a;
  }

  .el-icon-error {
    color: #f56c6c;
  }

</style>
