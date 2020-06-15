<template>
    <div>
        <el-submenu 
            v-for="child in route" 
            v-if="child.meta.hasSubMenu"
            :key="child.path"
            :index="getPath(child.path)">
            <template slot="title">
                <i :class="child.meta.icon"></i>
                    <span slot="title">
                        {{child.meta.title}}
                    </span>
            </template>
            <!--递归调用组件自身 -->
            <MenuItem 
                :route="child.children" 
                :basepath="getPath(child.path)">
            </MenuItem>
        </el-submenu>
        <el-menu-item :index="getPath(child.path)" v-else> 
            <i :class="child.meta.icon"></i>
            <span slot="title">
                   {{child.meta.title}}
            </span>
        </el-menu-item>
        
    </div>
</template>
<script>
import path from 'path'
export default {
    name: 'MenuItem',
    props: ['route','basepath'],
    data(){
        return {
           
        }
    },
    methods :{
        // routepath 为当前菜单的path值
        // getpath: 拼接 当前菜单的上一级菜单的path 和 当前菜单的path
        getPath: function(routePath){
            return path.resolve(this.basepath, routePath);
        }
    }
}
</script>