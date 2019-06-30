// 天启
var item1 = {
    color: '#F54F4A'
};
var item2 = {
    color: '#FF8C75'
};
var item3 = {
    color: '#FFB499'
};

var data = [{
    name: '2015',
    itemStyle: item1,
    children: [{
        name: '20',
        value: 15,
        itemStyle: item2,
        children: [{
            name: '计基 83',
            value: 3,
            itemStyle: item3
        }, {
            name: '离散 92',
            value: 3,
            itemStyle: item3
        }, {
            name: '微积分 93',
            value: 3,
            itemStyle: item3
        }, {
            name: '体育 85',
            value: 3,
            itemStyle: item3
        }, {
            name: '大学英语',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '大一下',
    itemStyle: item1,
    children: [{
        name: '',
        value: 17,
        itemStyle: item2,
        children: [{
            name: '软工一 87',
            value: 3,
            itemStyle: item3
        }, {
            name: '微积分2 80',
            value: 3,
            itemStyle: item3
        }, {
            name: '大学英语 86',
            value: 3,
            itemStyle: item3
        }, {
            name: '体育 84',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '大二上',
    itemStyle: item1,
    children: [{
        name: '',
        value: 16,
        itemStyle: item2,
        children: [{
            name: 'C++程设 75',
            value: 3,
            itemStyle: item3
        }, {
            name: '数据结构 72',
            value: 3,
            itemStyle: item3
        }, {
            name: '软工二 88',
            value: 3,
            itemStyle: item3
        },]
    }]
}, {
    name: '大二下',
    itemStyle: item1,
    children: [{
        name: '',
        value: 15,
        itemStyle: item2,
        children: [{
            name: '计网 87',
            value: 3,
            itemStyle: item3
        }, {
            name: '操作系统 95',
            value: 3,
            itemStyle: item3
        }, {
            name: '数据库 80',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '大三上',
    itemStyle: item1,
    children: [{
        name: '',
        value: 15,
        itemStyle: item2,
        children: [{
            name: '嵌入式 90',
            value: 3,
            itemStyle: item3
        }, {
            name: '数据库 92',
            value: 3,
            itemStyle: item3
        }, {
            name: 'Linux基础 85',
            value: 3,
            itemStyle: item3
        }]
    }]
},];


option = {
    series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: data,
        label: {
            rotate: 'radial'
        },
        levels: [],
        itemStyle: {
            color: '#ddd',
            borderWidth: 2
        }
    }
};

function get_cour_cur_option() {
    return option;
}