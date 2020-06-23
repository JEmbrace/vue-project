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
