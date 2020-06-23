<template>
    <div id="menu-index">
        <el-container>
            <el-header>
                <TopMenu :logoPath="logoPath" :name="name"></TopMenu>
            </el-header>
            <el-container id="inside-container">
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
<style lang="scss">
    // 最菜单栏和el-main部分作为一个整体进行绝对定位，目的是为了设置高度撑满浏览器
    // 这样当el-mian部分内容溢出时，只会在el-main部分出现滚动条，且滚动鼠标时只有el-main部分会滚动
    #inside-container{
        position: absolute;
        top: 100px;
        bottom: 0px;
        width: 100%;
        // 使菜单高度充满屏幕
        #left-menu, .el-menu-vertical-demo{
            height: 100%;
        }
    }
</style>