<template>
    <div>
        <el-menu class="el-menu-vertical-demo"
                @open="handleOpen" style="text-align: left;height: 100%;overflow-y: visible;overflow-x: hidden"
                background-color="#54A5F5"
                text-color="#fff"
                :collapse="isCollapse"
                active-text-color="#54667a"
                router :default-active="$route.path"
                @close="handleClose">
            <el-menu-item index="/ui/layout/home">
                <i class="el-icon-menu" style="color: #fff"></i>
                <span slot="title">Dashboard</span>
            </el-menu-item>

            <!--<el-submenu index="6">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-tickets"></i>-->
                    <!--<span>Template</span>-->
                <!--</template>-->
                <!--<el-menu-item class="font-menu second-menu" index="/ui/layout/pageList">-->
                    <!--<i class="iconfont pbx-liebiao" style="color: #fff"></i>-->
                    <!--<span class="inline-block" style="width: 5px;"></span>-->
                    <!--Page List-->
                <!--</el-menu-item>-->
            <!--</el-submenu>-->


            <!--<el-submenu index="4">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-tickets"></i>-->
                    <!--<span>Payments</span>-->
                <!--</template>-->
                <!--<el-menu-item class="font-menu second-menu" index="/ui/layout/seller">-->
                    <!--<i class="iconfont pbx-liebiao" style="color: #fff"></i>-->
                    <!--<span class="inline-block" style="width: 5px;"></span>-->
                    <!--Seller-->
                <!--</el-menu-item>-->
                <!--<el-menu-item class="font-menu second-menu" index="/ui/layout/eInvoiceList">-->
                    <!--<i class="iconfont pbx-liebiao" style="color: #fff"></i>-->
                    <!--<span class="inline-block" style="width: 5px;"></span>-->
                    <!--My Payment-->
                <!--</el-menu-item>-->
            <!--</el-submenu>-->

            <el-menu-item index="authManagement">
                <i class="el-icon-edit-outline" style="color: #fff"></i>
                <span slot="title">Forms Submission</span>
            </el-menu-item>

            <el-menu-item index="buyerList">
                <i class="el-icon-tickets" style="color: #fff"></i>
                <span slot="title">Manage Buyers</span>
            </el-menu-item>

            <el-menu-item index="eInvoiceList">
                <i class="el-icon-tickets" style="color: #fff"></i>
                <span slot="title">Manage Invoices</span>
            </el-menu-item>

            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-sort" style="color: #fff"></i>
                    <span>Reports</span>
                    <!--<span class="font-menu">TRANSACTIONAL DOCS</span>-->
                </template>
                <el-menu-item class="font-menu second-menu" index="overallInvoices">
                    <i class="iconfont pbx-liebiaomoshi_kuai" style="color: #fff"></i>
                    <span class="inline-block" style="width: 5px;"></span>
                     Overall Invoices
                </el-menu-item>
            </el-submenu>

            <div style="width: 100%;border-bottom:solid 1px #fff ">

            </div>
            <div @click="callapseCell" class="mouse-hand" style="width: 100%;text-align: center;margin-top: 10px;margin-bottom: 10px;height: 150px;">
                <el-button v-show="isCollapse==false"  icon="el-icon-arrow-left" size="mini" circle></el-button>
                <el-button v-show="isCollapse==true" style="margin-left: 4px"  icon="el-icon-arrow-right" size="mini" circle></el-button>
            </div>
        </el-menu>


    </div>

</template>

<script>
    export default {
        name: "side-menu",
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            callapseCell: function() {
                console.log(this.isCollapse )

                if(this.isCollapse == false){
                    this.isCollapse = true
                }else{
                    this.isCollapse = false
                }
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .font-style {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {

        width: 210px;
        min-height: 400px;
    }

    .el-submenu__title i {
        color: #fff !important;
    }
    .el-menu{
        border-right:none;
    }
    .font-menu {
        font-size: 12px;
    }

    .el-menu-item {
        /*background-color: rgb(82, 140, 218) !important;*/
        background-color: #54A5F5 !important;
    }

    .el-menu-item.is-active {
        /*background-color: rgb(67, 132, 196) !important;*/
        background-color: #54A5F5 !important;
    }


</style>
