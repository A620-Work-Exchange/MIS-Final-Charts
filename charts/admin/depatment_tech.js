var indices = {
    name: 0,
    group: 1,
    id: 16
};
var schema = [
    { name: '陈老师', index: 0 },
    { name: '王老师', index: 1 },
    { name: '刘老师', index: 2 },
    { name: '赵老师', index: 3 },
    { name: '钱老师', index: 4 },
    { name: '孙老师', index: 5 },
    { name: '李老师', index: 6 },
    { name: '周老师', index: 7 },
    { name: '吴老师', index: 8 },
    { name: '郑老师', index: 9 },
    { name: '伏老师', index: 10 },
    { name: '黄老师', index: 11 },
    { name: '汤老师', index: 12 },
    { name: '贝老师', index: 13 },
    { name: '张老师', index: 14 },
    { name: '潘老师', index: 15 },
    { name: '房老师', index: 16 }
];

var groupCategories = [];
var groupColors = [];

$.get('charts/admin/data/tech.json', function (data) {
    normalizeData(data);

    myChart.setOption(option = getOption(data));

});


function normalizeData(originData) {
    var groupMap = {};
    originData.forEach(function (row) {
        var groupName = row[indices.group];
        if (!groupMap.hasOwnProperty(groupName)) {
            groupMap[groupName] = 1;
        }
    });

    originData.forEach(function (row) {
        row.forEach(function (item, index) {
            if (index !== indices.name
                && index !== indices.group
                && index !== indices.id
            ) {
                // Convert null to zero, as all of them under unit "g".
                row[index] = parseFloat(item) || 0;
            }
        });
    });

    for (var groupName in groupMap) {
        if (groupMap.hasOwnProperty(groupName)) {
            groupCategories.push(groupName);
        }
    }
    var hStep = Math.round(300 / (groupCategories.length - 1));
    for (var i = 0; i < groupCategories.length; i++) {
        groupColors.push(echarts.color.modifyHSL('#5A94DF', hStep * i));
    }
}

function getOption(data) {

    var lineStyle = {
        normal: {
            width: 0.5,
            opacity: 0.05
        }
    };

    return {
        backgroundColor: '#333',
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj[0].value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + schema[1].name + '：' + value[1] + '<br>'
                    + schema[2].name + '：' + value[2] + '<br>'
                    + schema[3].name + '：' + value[3] + '<br>'
                    + schema[4].name + '：' + value[4] + '<br>'
                    + schema[5].name + '：' + value[5] + '<br>'
                    + schema[6].name + '：' + value[6] + '<br>';
            }
        },
        title: [
            {
                text: 'Groups',
                top: 0,
                left: 0,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        visualMap: {
            show: true,
            type: 'piecewise',
            categories: groupCategories,
            dimension: indices.group,
            inRange: {
                color: groupColors //['#d94e5d','#eac736','#50a3ba']
            },
            outOfRange: {
                color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
            },
            top: 20,
            textStyle: {
                color: '#fff'
            },
            realtime: false
        },
        parallelAxis: [
            { dim: 16, name: schema[16].name, scale: true, nameLocation: 'end' },
            { dim: 2, name: schema[2].name, nameLocation: 'end' },
            { dim: 4, name: schema[4].name, nameLocation: 'end' },
            { dim: 3, name: schema[3].name, nameLocation: 'end' },
            { dim: 5, name: schema[5].name, nameLocation: 'end' },
            { dim: 6, name: schema[6].name, nameLocation: 'end' },
            { dim: 7, name: schema[7].name, nameLocation: 'end' },
            { dim: 8, name: schema[8].name, nameLocation: 'end' },
            { dim: 9, name: schema[9].name, nameLocation: 'end' },
            { dim: 10, name: schema[10].name, nameLocation: 'end' },
            { dim: 11, name: schema[11].name, nameLocation: 'end' },
            { dim: 12, name: schema[12].name, nameLocation: 'end' },
            { dim: 13, name: schema[13].name, nameLocation: 'end' },
            { dim: 14, name: schema[14].name, nameLocation: 'end' },
            { dim: 15, name: schema[15].name, nameLocation: 'end' }
        ],
        parallel: {
            left: 280,
            top: 20,
            // top: 150,
            // height: 300,
            width: 400,
            layout: 'vertical',
            parallelAxisDefault: {
                type: 'value',
                name: 'nutrients',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                realtime: false
            }
        },
        animation: false,
        series: [
            {
                name: 'nutrients',
                type: 'parallel',
                lineStyle: lineStyle,
                inactiveOpacity: 0,
                activeOpacity: 0.01,
                progressive: 500,
                smooth: true,
                data: data
            }
        ]
    };
}