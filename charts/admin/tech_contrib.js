tech_contrib_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['有效课程', '问题课程', '课程产出']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: ['2015', '2016', '2017', '2018', '2019']
        }
    ],
    series: [
        {
            name: '课程产出',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [3, 4, 5, 6, 5]
        },
        {
            name: '有效课程',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [3, 4, 6, 6, 7]
        },
        {
            name: '问题课程',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [0, 0, -1, 0, -2]
        }
    ]
};

function get_tech_contrib_option () {
    return tech_contrib_option;
}