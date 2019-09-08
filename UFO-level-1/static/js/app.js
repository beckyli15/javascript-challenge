// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
//var inputField = d3.select("#datetime");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


//console.log the weather data from data.js
var populate=(aliendata)=>{


    data.forEach(ufo_sightings =>{
     var row=tbody.append("tr");
     columns.forEach(column => row.append("td").text(ufo_sightings[column])
     )
    });
}
populate(data);



button.on("click",function(){
    var inputElement = d3.select("#datetime");
    var inputValue= inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData=tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
});

