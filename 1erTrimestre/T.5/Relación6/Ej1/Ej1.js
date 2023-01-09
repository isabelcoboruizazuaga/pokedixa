/*

Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:

a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).

b) Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.
*/
window.onload = () => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', {'packages': ['geochart'],});

    google.charts.setOnLoadCallback(dibujaPie);
    google.charts.setOnLoadCallback(dibujaBarras);
    google.charts.setOnLoadCallback(dibujaMapa);

    function dibujaMapa() {
        var data = google.visualization.arrayToDataTable([
            ['País', 'Nº de turistas'],
            ['France', 89.400],
            ['Spain', 83.509],
            ['EEUU', 79.256],
            ['China', 65.700],
            ['Italy', 64.513],
            ['Turkey', 51.192],
            ['Mexico', 45.024],
            ['Thailand', 39.797],
            ['Germany', 39.563],
            ['United Kingdom', 39.418],
            ['Japan', 32.182],
            ['Austria', 31.884],
            ['Greece', 31.348],
            ['Malasia', 26.101],
            ['Portugal', 24.600],
            ['RU', 24.419],
            ['CanadA', 22.145],
            ['Poland', 21.155],
            ['Netherlands', 20.128]
        ]);

        var options = {
            colorAxis: {colors: ['#33E0C6', 'black', '#4E4D95']},
          backgroundColor: '#81d4fa',
          datalessRegionColor: 'white'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }

    function dibujaBarras() {
        var data = new google.visualization.arrayToDataTable([
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
            bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
    };


    function dibujaPie() {
        var data = google.visualization.arrayToDataTable([
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
            title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}
