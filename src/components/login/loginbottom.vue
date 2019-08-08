<template>
  <div style="width: 100%;bottom:0;position: fixed;background-color: #006ed4;z-index: 9999">
    <el-footer style="padding: 0;height: 70px; line-height: 70px;border-top:solid 1px #cecece;">
      <p style="width: 60%;color: #ffffff;margin: 0 auto;text-align: center;font-size: 20px;font-family: 'Rubik', sans-serif;">
        Copyright <i class="iconfont pbx-banquan"></i> PracBiz Pte Ltd UEN 200211011D
        | <a class="font-500 link-hover3 mouse-hand" @click="openPrivacyPolicy">Privacy Policy</a>
        | <a class="font-500 link-hover3 mouse-hand" @click="openTermsOfUse">Terms of Use</a>
      </p>
    </el-footer>
  </div>

</template>

<script>
  import {baseUrl} from 'common/env'

    export default {
        name: "loginbottom",
      data() {
          return {

          }
      },
      methods: {
        openPrivacyPolicy: function () {
          let url = baseUrl + "api/signUp/privacypolicy"

          window.open(url, "_blank", '')
        },
        openTermsOfUse: function () {
          let url = baseUrl + "api/signUp/termsofuse"
            let myWindow = window.open(url, "_blank", '')
            myWindow.document.title = 'PracBiz Group Website Terms of Use'
        }
      }

    }
</script>

<style scoped>

</style>
