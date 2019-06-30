var colors = ['#5793f3', '#d14a61', '#675bba'];

cour_count_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['选课', '退课', '完成课程']
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
            data: ['大一上', '大一下', '大二上', '大二下', '大三上']
        }
    ],
    series: [
        {
            name: '完成课程',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [5, 4, 3, 3, 3]
        },
        {
            name: '选课',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [7, 6, 4, 3, 4]
        },
        {
            name: '退课',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-2, -2, -1, 0, -1]
        }
    ]
};

function get_cour_count_option() {
    return cour_count_option;
}