<template>
    <div id="app" style="height: 100%;">
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: 'App',
        provide() {
            return {
                reload: this.reload
            }
        },
        data () {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style>
    #app {
        height: 100%;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif !important;
    }
</style>
