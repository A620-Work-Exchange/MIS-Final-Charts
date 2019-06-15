cre_option = {
    title: {
        text: '学分统计',
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
        data: ['大一上', '大一下', '大二上', '大二下', '大三上']
    },
    series: [
        {
            name: '学期',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 22, name: '大一上' },
                { value: 20, name: '大一下' },
                { value: 25, name: '大二上' },
                { value: 24, name: '大二下' },
                { value: 20, name: '大三上' }
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
function get_cre_option() {
    return cre_option;
}