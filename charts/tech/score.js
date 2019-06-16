score_option = {
    title: {
        text: '成绩统计',
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
        data: ['90~100', '80~90', '70~80', '60~70', '未通过']
    },
    series: [
        {
            name: '学期',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 20, name: '90~100' },
                { value: 10, name: '80~90' },
                { value: 15, name: '70~80' },
                { value: 15, name: '60~70' },
                { value: 20, name: '未通过' }
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
function get_score_option() {
    return score_option;
}