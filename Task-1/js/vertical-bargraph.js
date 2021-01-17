
  // google.charts.load('current', {'packages':['bar']});
  google.charts.load('43', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Test1', 'marks1', 'marks2', 'marks3', 'marks4'],
      ['1', 79,94,88,78],
      ['2', 99,94,88,70]
    ]);

    var options = {
      chart: {
        title: 'Performance chart',
        subtitle: '2020-2021',
      },
      bars: 'horizontal', // Required for Material Bar Charts.
      animation: {
        startup:true,
        duration: 1000,
        easing: 'out'
     }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart_material'));
    // console.log(google.charts.Bar.convertOptions(options);
    chart.draw(data,options);
    // chart.draw(view, options);


    
        
  google.visualization.events.addListener(chart, 'onmouseover', selectHandler);

  function selectHandler(e) {
    var options = {
      chart: {
        title: 'Performance chart',
        subtitle: '2020-2021',
      },
      bars: 'horizontal', // Required for Material Bar Charts.
      animation: {
        startup:true,
        duration: 1000,
        easing: 'out'
     }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart_material'));
    // console.log(google.charts.Bar.convertOptions(options));
    chart.draw(data,options);
      // chart.draw(view, options);
  }
  }