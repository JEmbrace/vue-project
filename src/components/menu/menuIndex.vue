<template>
    <div id="menu-index">
        <el-container>
            <el-header>
                <TopMenu :logoPath="logoPath" :name="name"></TopMenu>
            </el-header>
            <el-container id="left-container">
                <el-aside width="200px">
                    <LeftMenu></LeftMenu>                    
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import LeftMenu from './leftMenu';
import TopMenu from './topMenu';
export default {
    name: 'MenuIndex',
    components: {LeftMenu, TopMenu},
    data() {
        return {
            logoPath:  require("../../assets/images/logo1.png"),
            name: '员工管理系统'
        }
    }
}
</script>
<style lang="scss">
    #menu-index{
        .el-header{
            padding: 0px;
        }
        a.router-link-active{
            color: #409EFF;
        }
        a{
            text-decoration: none;
            color: #303133;
        }
        // 实现二级菜单选中 一级菜单和一级标题高亮
        .el-submenu.is-active i,.el-submenu.is-active .el-submenu__title span{
            color: #409EFF;
        }
    }
</style>