const dataArray = [];

d3.csv("https://raw.githubusercontent.com/KevinNMcpu/D3-challenge/main/D3_data_journalism/data.csv", function(dataFromCSV) {
    dataArray.push(dataFromCSV);
});

let margin = { top: 10, right: 30, bottom: 50, left: 60 },
    width = 660 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
    
let svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"
);

let x = d3.scaleLinear().domain([38000, 74000]).range([0, width]);

svg
   .append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x));

svg
   .append("text")
   .attr("transform","translate(" + width / 2 + " ," + (height + margin.top + 30) + ")")
   .style("text-anchor", "middle")
   .text("Average Income");

let y = d3.scaleLinear().domain([9, 27]).range([height, 0]);
svg.append("g").call(d3.axisLeft(y));

svg
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", -40)
   .attr("x", 0 - height / 2)
   .style("text-anchor", "middle")
   .text("Rate of Smokers");

setTimeout(function()
    {    

        svg.append('g')
        .selectAll(null)
        .data(dataArray)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.income); } )
        .attr("cy", function (d) { return y(d.smokes); } )
        .attr("r", 10)
        .style("fill", "#69b3a2")

        svg.selectAll(null)
        .data(dataArray)
        .enter()
        .append("text")
        .attr("x", function(d) {
            return x(d.income);
        })
        .attr("y", function(d) {
            return y(d.smokes);
        })
        .text(function(d) {
            return d.abbr;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "10px")
        .attr("text-anchor", "middle")
        .attr("fill", "white");

        }
    
, 100);