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
            name: '计思',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '2016',
    itemStyle: item1,
    children: [{
        name: '',
        value: 17,
        itemStyle: item2,
        children: [{
            name: '计思',
            value: 3,
            itemStyle: item3
        }, {
            name: '走进数学',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '2017',
    itemStyle: item1,
    children: [{
        name: '',
        value: 16,
        itemStyle: item2,
        children: [{
            name: '计思',
            value: 3,
            itemStyle: item3
        }, {
            name: 'AI导论',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '2018',
    itemStyle: item1,
    children: [{
        name: '',
        value: 15,
        itemStyle: item2,
        children: [{
            name: 'AI导论',
            value: 3,
            itemStyle: item3
        }]
    }]
}, {
    name: '2019',
    itemStyle: item1,
    children: [{
        name: '',
        value: 15,
        itemStyle: item2,
        children: [{
            name: '嵌入式',
            value: 3,
            itemStyle: item3
        }]
    }]
},];


gen_cour_option = {
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

function get_gen_cur_option() {
    return gen_cour_option;
}