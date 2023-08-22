function updateChart(data) {
    var selectedDistrict = document.optionChanged("selDataset").value;

    // Filter data based on selected district
    var filteredData = data.filter(function (d) {
        return d.district_id === selectedDistrict;
    });

    // Calculate the count of RECORD_ID for each year
    var countsByYear = d3.rollup(filteredData, v => v.length, d => d.YEAR);

    // Convert the map to an array for easier data binding
    var countsArray = Array.from(countsByYear, ([year, count]) => ({ year, count }));

    // Clear the previous chart elements
    d3.select("#bar-chart").selectAll("*").remove();

    // Set up chart dimensions
    var margin = { top: 20, right: 20, bottom: 60, left: 60 }, // Adjusted for axis labels
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // Create scales for x and y axes
    var x = d3.scaleBand()
        .domain(countsArray.map(d => d.year))
        .range([0, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .domain([0, d3.max(countsArray, d => d.count)])
        .nice()
        .range([height, 0]);

    // Create the SVG container
    var svg = d3.select("bar")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create bars
    svg.selectAll(".bar")
        .data(countsArray)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.count))
        .attr("height", d => height - y(d.count));

    //<!-- Create x-axis with label -->
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 40) // Adjust the Y position
        .style("text-anchor", "middle")
        .text("Year");

    //<!-- Create y-axis with label -->
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -50) // Adjust the Y position
        .style("text-anchor", "middle")
        .text("Count of Incidents");

}

// Load data from CSV file
d3.csv("http://127.0.0.1:8000/Data/KSI_final.csv").then(function(data) {
    // Populate the district dropdown with unique values
    var districtDropdown = d3.select("#district");
    var districtOptions = Array.from(new Set(data.map(function (d) { return d.district_id; })));
    districtOptions.forEach(function (district) {
        districtDropdown.append("option")
            .attr("value", district)
            .text(district);
    });

    // Add event listener to the dropdown to update the chart
    districtDropdown.on("change", function () { updateChart(data); });

    // Initial chart creation
    updateChart(data);
});