hw_exce_option = {
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
        data: ['操作系统', '数据库', '数据结构', '计思', 'AI导论']
    },
    series: [
        {
            name: '学期',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 30, name: '操作系统' },
                { value: 10, name: '数据库' },
                { value: 20, name: '数据结构' },
                { value: 5, name: '计思' },
                { value: 10, name: 'AI导论' }
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
function get_hw_exce_option() {
    return hw_exce_option;
}