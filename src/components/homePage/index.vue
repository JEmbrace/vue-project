<template>
    <div id="homepage"> 
        <!-- 首页图表部分 -->
        <!-- 考勤：统计上一个月 [正常打卡]、[请假]、[打卡异常] -->
        <!-- 工时：统计上一个月 [8h]、[8h-9h]、[9h-10h] -->
        <el-row>
            <el-col id="chart" :span="24">
                
            </el-col>
        </el-row>
        <!-- 内部通知：实时刷新  -->
        <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="时间"
                width="100"
                column-key="date">
            </el-table-column>
            <el-table-column
                prop="address"
                label="消息"
                column-key="date">
            </el-table-column>
            <el-table-column
                prop="tag"
                label=""
                width="200">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.tag === '重要' ? 'danger' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                    <el-tag
                    :type="scope.row.deal === '处理' ? 'success' : 'danger'"
                    disable-transitions>{{scope.row.deal}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'Index',
    mounted(){
       this.drawChart();
    },
    data() {
        return {
            tableData: [{
                date: '2020-05-02',
                name: '王小虎',
                address: '工号：6924  姓名：侯娇娇 考勤异常申请处理',
                tag: '重要',
                deal: '已处理'
            }, {
                date: '2020-06-04',
                name: '王小虎',
                address: '工号：6944  姓名：小土豆 请假单审批',
                tag: '正常',
                deal: '已处理'
            }, {
                date: '2020-05-01',
                name: '王小虎',
                address: '迄今最多X射线源宇宙图谱“出炉”',
                tag: '正常',
                deal: '已处理'
            }, {
                date: '2020-07-03',
                name: '王小虎',
                address: '薯条不是土豆做的？长知识了，以后自己做吧',
                tag: '重要',
                deal: '未处理'
            }]
        }
    },
    methods: {
       drawChart: function(){
            let myChart = echarts.init(document.getElementById('chart'));
            let data = [{
                name: '正常打卡',
                value: 99
            }, {
                name: '请假',
                value: 1
            }, {
                name: '打卡异常',
                value: 0
            }, {
                name: '工时=8h',
                value: 10
            }, {
                name: '工时>8h',
                value: 90
            }]

            let titleArr = [],
                seriesArr = [];
            let colors = [
                ['#389af4', '#dfeaff'],
                ['#ff8c37', '#ffdcc3'],
                ['#ffc257', '#ffedcc'],
                ['#fd6f97', '#fed4e0'],
                ['#a181fc', '#e3d9fe']
            ]
            data.forEach(function(item, index) {
                titleArr.push({
                    text: item.name,
                    left: index * 20 + 10 + '%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '16',
                        color: colors[index][0],
                        textAlign: 'center',
                    },
                });
                seriesArr.push({
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [30, 70],
                    itemStyle: {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: [index * 20 + 10 + '%', '50%'],
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function(params) {
                                    return params.value + '%';
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: 100 - item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                })
            });


            let option = {
                backgroundColor: "#fff",
                title: titleArr,
                series: seriesArr
            }
            myChart.setOption(option);
       }
    }
}
</script>
<style lang="scss" scoped>
    #chart{
       width: 100%;
       height: 250px;
    }
</style>
