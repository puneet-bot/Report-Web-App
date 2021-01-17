// google.charts.load('current', {'packages':['bar']});
google.charts.load('43', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Test1', 'marks1', 'marks2', 'marks3', 'marks4'],
          ['1', 79,94,88,78],
          ['1', 79,94,88,78],
          ['2', 72,97,80,70]
          
        ]);

        var options = {
          chart: {
            title: 'Subject Performance',
            subtitle: 'Class Test-2020',
          },
          legend: { position: 'none' },
          animation: {
            startup:true,
            duration: 1000,
            easing: 'out'
         }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));

        // chart.draw(data, google.charts.Bar.convertOptions(options));
        chart.draw(data,options);



        
  google.visualization.events.addListener(chart, 'onmouseover', selectHandler);

  function selectHandler(e) {
    
    var options = {
      chart: {
        title: 'Subject Performance',
        subtitle: 'Class Test-2020',
      },
      legend: { position: 'none' },
      animation: {
        startup:true,
        duration: 1000,
        easing: 'out'
     }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));

    // chart.draw(data, google.charts.Bar.convertOptions(options));
    chart.draw(data,options);
  }
        
      }
