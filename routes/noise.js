var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('noise');

    /* const Influx = require('influxdb-nodejs');
    //Database connection Influx
    const client = new Influx('http://163.221.68.191:8086/IFoT-GW1');

    const reader = client.query('IFoT-GW1-Meas');
    reader.start = '-2h';
    reader.addFunction('mean("noise")', {
        alias: 'mean_noise',
    });
    reader.addGroup('time(5m)', 'bt_address')
        .then(
            function (data) {
                console.info(reader.toSelect());
                for (var i in data.results[0].series) {
                    //console.info(data.results[0].series[i]);
                    var id = data.results[0].series[i].tags.bt_address;

                    console.info(id);

                    /!*!// input id
                    id = "S" + id;

                    // input id at the location
                    var area = object.select("#" + id);

                    area.interrupt();

                    area.attr("opacity", 1);

                    area.transition()
                        .duration(3000)
                        .ease(d3.easeExp)
                        .attr("opacity", 0.2);*!/
                }

                return data;
            }
        )
        .catch(console.error);*/
});

module.exports = router;