google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['test-1', 'marks1', 'marks-2', 'marks-3', 'marks-4'],
    ['1', 79, 94, 88, 78],
    ['2', 49, 54, 48, 80]
  ]);

  var options = {
    title: 'Performance Chart',
    vAxis: { title: 'Mathematics ' },
    isStacked: true,
    animation: {
      startup: true,
      duration: 1000,
      easing: 'in'
    }
  };

  var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'onmouseover', selectHandler);

  function selectHandler(e) {
    var options = {
      title: 'Performance Chart',
      vAxis: { title: 'Mathematics ' },
      isStacked: true,
      animation: {
        startup: true,
        duration: 500,
        easing: 'in'
      }
    };
  
    var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
  
    chart.draw(data, options);
    console.log("here");
  }
}