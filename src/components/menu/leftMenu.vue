<template>
    <div id="left-menu">
        <el-menu 
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            unique-opened
            router
            :collapse="false">
            <MenuItem :route="routesInfo">
            </MenuItem>
        </el-menu>
    </div>
</template>
<script>
import MenuItem from './menuItem'
export default {
    name: 'LeftMenu',
    components: { MenuItem },
    computed: {
        routesInfo: function(){
            return this.$router.options.routes;
        }
    },
    mounted(){
        
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss">
    // 使左边的菜单外层的元素高度充满屏幕
    #left-container{
        position: absolute;
        top: 100px;
        bottom: 0px;
        // 使菜单高度充满屏幕
        #left-menu, .el-menu-vertical-demo{
            height: 100%;
        }
    }
</style>