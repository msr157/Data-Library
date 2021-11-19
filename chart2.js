var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["US", "India", "Germany", "Russia", "New Zealand"],
    datasets: [
      {
        data: [12, 23, 8, 7, 14],
        label:"Apple Consumer Worldwide",
        backgroundColor:["red","green","blue","teal","orange"]
      },
      { 
        data: [8, 10, 2, 6, 9],
        label:"Apple Consumer Worldwide",
        backgroundColor:["red","green","blue","teal","orange"]
      },
    ],
  },
  options:{
responsive: false,
  },
});
