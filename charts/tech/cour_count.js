var colors = ['#5793f3', '#d14a61', '#675bba'];

cour_count_option = {
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
        data: ['专业课', '通识课', '总开课']
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
            name: '专业课',
            min: 0,
            max: 8,
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
            name: '通识课',
            min: 0,
            max: 4,
            position: 'right',
            offset: 80,
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
            name: '总开课',
            min: 0,
            max: 12,
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
            name: '专业课',
            type: 'bar',
            data: [2, 4, 7, 2, 5, 3, 6, 2, 6, 2, 6, 3]
        },
        {
            name: '通识课',
            type: 'bar',
            yAxisIndex: 1,
            data: [2, 2, 0, 2, 2, 1, 0, 2, 1, 1, 3, 2]
        },
        {
            name: '总开课',
            type: 'line',
            yAxisIndex: 2,
            data: [4, 6, 7, 4, 7, 4, 6, 4, 7, 3, 9, 5]
        }
    ]
};

function get_cour_count_option() {
    return cour_count_option;
}