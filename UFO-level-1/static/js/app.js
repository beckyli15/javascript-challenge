// from data.js
var tableData = data;


// YOUR CODE HERE!
var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Update table with a new dataset
function updateTable(dataset) {
    tbody.html('');
    dataset.forEach((toBeDefined) => {
      var row = tbody.append("tr");
      Object.entries(toBeDefined).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
  }
  
  updateTable(tableData);

  // Filter date function (just compare a string)
  function filterByDate(dataset) {
      var filteredData = dataset.filter(function (d) {
        return d.datetime ===  d3.select("#datetime").property("value");
    });
      return filteredData;
  }
  
  // Start here ...
  // First update table of original data
  updateTable(data);

  button.on("click", function() {
    // When filter is click
    // Filter data by datetime and update the table
    var result = filterByDate(tableData);
    updateTable(result);
  });
