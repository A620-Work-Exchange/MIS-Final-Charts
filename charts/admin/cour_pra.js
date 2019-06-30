cour_praise_option = {
    title: {
        text: '好评课程统计',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['高分课程', '正常课程', '低分飘过课程']
    },
    series: [
        {
            name: '学期',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 30, name: '高分课程' },
                { value: 20, name: '正常课程' },
                { value: 5, name: '低分飘过课程' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
function get_cour_praise_option() {
    return cour_praise_option;
}