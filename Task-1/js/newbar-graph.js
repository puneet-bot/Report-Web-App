const chart = new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
      borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
      borderWidth: 1
    }]
  },
  options: {
    onHover:jik,
    onComplete:kl,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataset = chart.config.data.datasets[0];
const bgColors = dataset.backgroundColor.slice(0);
const borderColors = dataset.borderColor.slice(0);

let changeBarColor = true;
setInterval(() => {
  if (changeBarColor) {
    let i = randomInt(0, bgColors.length - 1);
    dataset.backgroundColor[i] = borderColors[i];
  } else {      
    dataset.backgroundColor = bgColors.slice(0);    
  }
  chart.update();
  changeBarColor = !changeBarColor;
}, 1000);


// ==========================================================================================================

//ANNIMATION CODE FOR HOVERING GOES HERE .........................

// ==========================================================================================================

function jik(event){
    const chart = new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
            borderWidth: 1
          }]
        },
        options: {
            animation: {
                duration:1000,
                easing:'linear',
                
            },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      
      function randomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      const dataset = chart.config.data.datasets[0];
      const bgColors = dataset.backgroundColor.slice(0);
      const borderColors = dataset.borderColor.slice(0);
      
      let changeBarColor = true;
      setInterval(() => {
        if (changeBarColor) {
          let i = randomInt(0, bgColors.length - 1);
          dataset.backgroundColor[i] = borderColors[i];
        } else {      
          dataset.backgroundColor = bgColors.slice(0);    
        }
        chart.update();
        changeBarColor = !changeBarColor;
      }, 1000);
};
// ==============================================================================================================

//ON COMPLETION OF THE FIRST ANNIMATION ON HOVER..... HERE IT IS MAKING SURE THAT AFTER ANNIMATION IS COMPLETED , 
// WE SHOULD NOT EXECUTE THE FUNCTION AGAIN...

// ==============================================================================================================
function kl(){
  const chart = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        borderWidth: 1
      }]
    },
    options: {

        animation: {
            duration: 0, // general animation time
        },
        hover: {
            animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const dataset = chart.config.data.datasets[0];
  const bgColors = dataset.backgroundColor.slice(0);
  const borderColors = dataset.borderColor.slice(0);
  
  let changeBarColor = true;
  setInterval(() => {
    if (changeBarColor) {
      let i = randomInt(0, bgColors.length - 1);
      dataset.backgroundColor[i] = borderColors[i];
    } else {      
      dataset.backgroundColor = bgColors.slice(0);    
    }
    chart.update();
    changeBarColor = !changeBarColor;
  }, 1000);
  
}