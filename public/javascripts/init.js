'use strict';

window.onload = function () {


    // add ubi-lab map as an object

    var object = d3.select(document.getElementById("ubimap").contentDocument);

    // objectの中のsvg
    var svg = object.select("svg");

    var point = svg.append("g")
        .attr("id", "sensor_location");
    d3.json("/sensor/sensor_location.json", function(error, json) {
        if (error) throw error;
        //console.info('before draw circle');

        point
            .selectAll("circle")
            .data(json)
            .enter()
            .append("circle")
            .attr("id", function(d) { return "S"+d.id; })
            .attr("r", "30")
            .attr("fill", "red")
            .attr("opacity", 0)
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        console.info(point);

    });

};


