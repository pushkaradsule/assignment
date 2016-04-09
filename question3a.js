var fs = require('fs');
var path = "c:/ccd";



var fs = require('fs');
var files = fs.readdirSync(path);
var BlueButton = require('bluebutton');
var totalCount = 0;

for (var i in files) {


    if (files[i].indexOf('.xml') > -1) {

        var xml = fs.readFileSync(files[i], 'utf-8');

        var myRecord = BlueButton(xml);

        totalCount = totalCount + myRecord.data.problems.length;
    }


}

console.log('Patient problems are there in total across the 100 files are ' + totalCount);