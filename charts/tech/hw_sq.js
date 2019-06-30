sq_option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '均分', '方差', '2017'],
        source: [
            { product: '第一次作业', '均分': 80, '方差': 56.25},
            { product: '第二次作业', '均分': 90, '方差': 156.25},
            { product: '第三次作业', '均分': 70, '方差': 6.25},
            { product: '第四次作业', '均分': 20, '方差': 506.25}
        ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
    ]
};

function get_hw_sq_option() {
    return sq_option;
}