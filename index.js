var dataset = [
    [1,1],[0,1],[1,0],
    [10,10],[10,13],[13,13],
    [54,54],[55,55],[89,89],[57,55]
];
 
var clustering = require('density-clustering');
var dbscan = new clustering.DBSCAN();
// parameters: 5 - neighborhood radius, 2 - number of points in neighborhood to form a cluster
var clusters = dbscan.run(dataset, 5, 2);
console.log(clusters, dbscan.noise);


const fs = require('fs');
fs.writeFile("./test.txt", JSON.stringify(clusters) + JSON.stringify(dbscan.noise), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 