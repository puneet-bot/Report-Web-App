$(function(){

    //get the pie chart canvas
    var ctx1 = $("#pie-chartcanvas-3");
    // var ctx2 = $("#pie-chartcanvas-2");
  
    //pie chart data
    var data3 = {
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
        text: "Doughnut Chart",
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
      onHover:jik,
    };
  
    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: 'doughnut',
      data: data3,
      options: options
      
    });

  });

  // ==========================================================================================================

//ANNIMATION CODE FOR HOVERING GOES HERE .........................

// ==========================================================================================================

  function jik(event){
    var ctx1 = $("#pie-chartcanvas-3");
    // var ctx2 = $("#pie-chartcanvas-2");
  
    //pie chart data
    var data3 = {
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
        text: "Doughnut Chart",
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
        duration:3000,
        easing:'easeOutBounce',
        
    },
    onComplete:ktl,
    };
  
    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: 'doughnut',
      data: data3,
      options: options
      
    });


  }

// ==========================================================================================================

//ANNIMATION CODE FOR HOVERING GOES HERE .........................

// ==========================================================================================================
  function ktl(event)
  {
    console.log("completed!!!");
    var ctx1 = $("#pie-chartcanvas-3");
    //pie chart data
    var data3 = {
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
        text: "Doughnut Chart",
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
            duration: 0, // general animation time
        },
        hover: {
            animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
    };
  
    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: 'doughnut',
      data: data3,
      options: options
      
    });
  };
