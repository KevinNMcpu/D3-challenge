console.log("this is a test");

var rows;

d3.csv("data.csv"), function(loadedRows) {
    rows = loadedRows;
    SplatterGraphing();
    console.log(rows);
}

function SplatterGraphing() {
    //graphing
}