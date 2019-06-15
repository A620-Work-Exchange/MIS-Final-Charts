ab_option = {
    title: {
        text: '个人能力',
        subtext: '',
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
    },
    legend: {
        type: 'scroll',
        bottom: 10,
        data: (function () {
            var list = [];
            for (var i = 0; i <= 3; i++) {
                list.push(i + 2016 + '');
            }
            return list;
        })()
    },
    visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true
    },
    radar: {
        indicator: [
            { text: '专业课', max: 400 },
            { text: '思政', max: 400 },
            { text: '体育', max: 400 },
            { text: '英语', max: 400 },
            { text: '数学', max: 400 }
        ]
    },
    series: (function () {
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name: '个人能力',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data: [
                    {
                        value: [
                            (40 - i) * 10,
                            (38 - i) * 4 + 60,
                            i * 5 + 10,
                            i * 9,
                            i * i / 2
                        ],
                        name: i + 2000 + ''
                    }
                ]
            });
        }
        return series;
    })()
};

function get_ab_option() {
    return ab_option;
}