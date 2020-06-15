import Vue from 'vue';
import Router from "vue-router";

// 菜单
import MenuIndex from '@/components/menu/menuIndex.vue';

// 首页
import Index from '@/components/homePage/index.vue';

// 人员统计
import EmployeeStatistics from '@/components/employeeManage/employeeStatistics.vue';
import EmployeeManage from '@/components/employeeManage/employeeManage.vue'

// 考勤
// 考勤统计
import AttendStatistics from '@/components/attendManage/attendStatistics';
// 考勤列表
import AttendList from '@/components/attendManage/attendList.vue';
// 异常管理
import ExceptManage from '@/components/attendManage/exceptManage.vue';

// 工时
// 工时统计
import TimeStatistics from '@/components/timeManage/timeStatistics.vue';
// 工时列表
import TimeList from '@/components/timeManage/timeList.vue';

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


let routes = [
    // 首页(仪表盘、快速入口)
    {
        path: '/index',
        name: 'index',
        component: MenuIndex,
        redirect: '/index',  
        meta: {
            title: '首页',    // 菜单标题
            icon: 'el-icon-s-home',  // 图标
            hasSubMenu: false, // 是否包含子菜单，false 没有子菜单；true 有子菜单

        },
        children:[
            {
                path: '/index',
                component: Index
            }
        ]
    },
    // 员工管理
    {
        path: '/employee',
        name: 'employee',
        component: MenuIndex,
        redirect: '/employee/employeeStatistics', 
        meta: {
            title: '员工管理',    // 菜单标题
            icon: 'el-icon-user-solid',  // 图标
            hasSubMenu: true,   // 是否包含子菜单
        },
        children: [
            // 员工统计
            {
                path: 'employeeStatistics',
                name: 'employeeStatistics',
                meta: {
                    title: '员工统计',    // 菜单标题,
                    hasSubMenu: false    // 是否包含子菜单
                },
                component: EmployeeStatistics,
            },
            // 员工管理(增删改查)
            {
                path: 'employeeManage',
                name: 'employeeManage',
                meta: {
                    title: '员工管理',    // 菜单标题
                    hasSubMenu: false    // 是否包含子菜单
                },
                component: EmployeeManage
            }
        ]
    },
    // 考勤管理
    {
        path: '/attendManage',
        name: 'attendManage',
        component: MenuIndex,
        redirect: '/attendManage/attendStatistics',
        meta: {
            title: '考勤管理',    // 菜单标题
            icon: 'el-icon-s-claim',  // 图标
            hasSubMenu: true, // 是否包含子节点，false 没有子菜单；true 有子菜单
        },
        children:[
            // 考勤统计
            {
                path: 'attendStatistics',
                name: 'attendStatistics',
                meta: {
                    title: '考勤统计',    // 菜单标题   
                    hasSubMenu: false    // 是否包含子菜单               
                },
                component: AttendStatistics,
            },
            // 考勤列表
            {
                path: 'attendList',
                name: 'attendList',
                meta: {
                    title: '考勤列表',    // 菜单标题   
                    hasSubMenu: false    // 是否包含子菜单                 
                },
                component: AttendList,
            },
            // 异常管理
            {
                path: 'exceptManage',
                name: 'exceptManage',
                meta: {
                    title: '异常管理',    // 菜单标题  
                    hasSubMenu: false    // 是否包含子菜单                  
                },
                component: ExceptManage,
            }
        ]
    },
    // 工时管理
    {
        path: '/timeManage',
        name: 'timeManage',
        component: MenuIndex,
        redirect: '/timeManage/timeStatistics',
        meta: {
            title: '工时管理',    // 菜单标题
            icon: 'el-icon-message-solid',  // 图标
            hasSubMenu: true, // 是否包含子节点，false 没有子菜单；true 有子菜单
        },
        children: [
            // 工时统计
            {
                path: 'timeStatistics',
                name: 'timeStatistics',
                meta: {
                    title: '工时统计',    // 菜单标题
                    hasSubMenu: false    // 是否包含子菜单        
                },
                component: TimeStatistics
            },
            // 工时列表
            {
                path: 'timeList',
                name: 'timeList',
                component: TimeList,
                meta: {
                    title: '工时列表',    // 菜单标题
                    hasSubMenu: false    // 是否包含子菜单        
                }
            }
        ]
    },
];
export default new Router({
    routes
})