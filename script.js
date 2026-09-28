var options = {
        series: [{
            name: 'Pendapatan',
            data: [625000000, 375000000, 187500000, 62500000]
        }],
        chart: {
            type: 'bar',
            height: 280,
            toolbar: { show: false }
        },
        colors: ['#2563eb'],
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '45%',
            }
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['Elektronik', 'Fashion', 'M&B', 'Kesehatan'],
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return "Rp " + (val / 1000000) + "M";
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();