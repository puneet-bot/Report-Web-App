$(function(){

  //get the pie chart canvas
  var ctx1 = $("#pie-chartcanvas-1");

  //pie chart data
  var data1 = {
    labels: ["match1", "match2", "match3", "match4", "match5"],
    datasets: [
      {
        label: "TeamA Score",
        data: [10, 50, 25, 70, 40],
        backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",
          "#F4A460",
          "#2E8B57"
        ],
        borderColor: [
          "#CDA776",
          "#989898",
          "#CB252B",
          "#E39371",
          "#1D7A46"
        ],
        borderWidth: [1, 1, 1, 1, 1]
      }
    ]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Pie Chart",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#333",
        fontSize: 12
      }
    },
    onHover:kij,
  };

  //create Chart class object
  var chart1 = new Chart(ctx1, {
    type: "pie",
    data: data1,
    options: options,

  });

});

function kij(event){
  var ctx1 = $("#pie-chartcanvas-1");

  //pie chart data
  var data1 = {
    labels: ["match1", "match2", "match3", "match4", "match5"],
    datasets: [
      {
        label: "TeamA Score",
        data: [10, 50, 25, 70, 40],
        backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",
          "#F4A460",
          "#2E8B57"
        ],
        borderColor: [
          "#CDA776",
          "#989898",
          "#CB252B",
          "#E39371",
          "#1D7A46"
        ],
        borderWidth: [1, 1, 1, 1, 1]
      }
    ]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Pie Chart",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#333",
        fontSize: 12
      }
    },
    animation: {
      duration:5000,
      easing:'easeOutBounce',
  },
  };

  //create Chart class object
  var chart1 = new Chart(ctx1, {
    type: "pie",
    data: data1,
    options: options,

  });

};