cour_pro_option = {
    title: {
        text: '操作系统人数统计',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}人"
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['第一次开课', '开学两周', '第一次作业', '期中', '期末']
    },
    calculable: true,
    series: [
        {
            name: '操作系统人数统计',
            type: 'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0',
            maxSize: '300',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 240, name: '第一次开课' },
                { value: 200, name: '开学两周' },
                { value: 120, name: '第一次作业' },
                { value: 100, name: '期中' },
                { value: 80, name: '期末' }
            ]
        }
    ]
};

function get_cour_pro_option() {
    return cour_pro_option;
}