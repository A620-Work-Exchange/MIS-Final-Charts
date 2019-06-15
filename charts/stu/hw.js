var data = [
    [[90, 100, 170968691, '第一次作业', 1], [70, 77, 170968691, '第二次作业', 2]],
    [[60, 50, 170968691, '第三次作业', 3], [0, 0, 1709686912, '第四次作业', 4]],
    [[100, 100, 170968691, '第五次作业', 5], [100, 67, 170968691, '第六次作业',6]],
    [[100, 90, 170968691, '第七次作业', 7], [70, 60, 170968691, '第八次作业', 8]],
    [[60, 50, 1709686912, '第九次作业', 9], [100, 80, 17096869, '第十次作业', 10]],
    [[60, 50, 1709686912, '第九次作业', 9], [100, 80, 17096869, '第十次作业', 10]],
];

hw_option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '操作系统1~4次作业完成情况'
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        name: '完成率%',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        name: '正确率%',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};

function get_hw_option() {
    return hw_option;
}