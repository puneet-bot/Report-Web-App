google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['test', 'Marks'],
    ['1',  89],
    ['2',  60],
    ['3',  86],
    ['4',  94]
  ]);
//   var data = google.visualization.arrayToDataTable([
//     ['test', 'Marks'],
//     ['1',  89],
//     ['2',  78],
//     ['3',  70],
//     ['4',  94]
//   ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    animation: {
      startup:true,
      duration: 2000,
      easing: 'out'
   }
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  // console.log(options);
  chart.draw(data, options);


  
  google.visualization.events.addListener(chart, 'onmouseover', selectHandler);

  function selectHandler(e) {
    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      animation: {
        startup:true,
        duration: 2000,
        easing: 'out'
     }
      
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    // console.log(options);
    chart.draw(data, options);
  }
}