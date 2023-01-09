window.onload = () => {

    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(dibujaBarras);

    function dibujaBarras() {
        var data = [];
        data[0] = new google.visualization.arrayToDataTable([
            ['Partido', 'Diputados'],
            ['PSOE', 0],
            ['PP', 0],
            ['Vox', 0],
            ['UP', 0],
            ['Cs', 0],
            ['ERC-Sobiranistes', 0],
            ['En Comú Podem', 0],
            ['JxCAT', 0],
            ['Otros', 0]
        ]);
        data[1] = new google.visualization.arrayToDataTable([
            ['Partido', 'Diputados'],
            ['PSOE', 120],
            ['PP', 89],
            ['Vox', 52],
            ['UP', 26],
            ['Cs', 10],
            ['ERC-Sobiranistes', 13],
            ['En Comú Podem', 7],
            ['JxCAT', 8],
            ['Otros', 25]
        ]);

        var options = {
            title: 'Congreso de los diputados',
            width: 800,
            legend: { position: 'none' },
            chart: {
                title: 'Congreso de los diputados',
                subtitle: 'diputados por partido'
            },
            bars: 'horizontal', // Required for Material Bar Charts.
            axes: {
                x: {
                    0: { side: 'top', label: 'Diputados' } // Top x-axis.
                }
            },
            bar: { groupWidth: "90%" },
            animation: {
                duration: 1000,
                easing: 'out'
            }

        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data[0], options);

        var button = document.getElementById('b1');
        button.onclick = function () {
            chart.draw(data[1], options);
        }

    };




}