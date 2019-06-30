var colors = ['#5793f3', '#d14a61', '#675bba'];

cour_user_option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['开课数', '选课数', '用户数']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '开课数',
            min: 0,
            max: 700,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} 门'
            }
        },
        {
            type: 'value',
            name: '选课数',
            min: 0,
            max: 4,
            position: 'right',
            offset: 300000,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} 门'
            }
        },
        {
            type: 'value',
            name: '用户数',
            min: 0,
            max: 40000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} 门'
            }
        }
    ],
    series: [
        {
            name: '开课数',
            type: 'bar',
            data: [400, 500, 550, 580, 600, 620, 660, 690, 700, 650, 660, 680]
        },
        {
            name: '选课数',
            type: 'bar',
            yAxisIndex: 1,
            data: [120000, 150000, 170000, 200000, 220000, 250000, 265000, 280000, 290000, 292000, 300000, 280000]
        },
        {
            name: '用户数',
            type: 'line',
            yAxisIndex: 2,
            data: [25000, 30000, 32000, 34000, 36000, 37000, 37500, 38000, 38200, 39000, 39500, 40000]
        }
    ]
};

function get_cour_user_option() {
    return cour_user_option;
}