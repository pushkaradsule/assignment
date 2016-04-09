var fs = require('fs');
var path = "c:/ccd";
var fs = require('fs');
var files = fs.readdirSync(path);
var BlueButton = require('bluebutton');
var totalProblemsWithHT = 0;

for (var i in files) {


    if (files[i].indexOf('.xml') > -1) {

        var xml = fs.readFileSync(files[i], 'utf-8');

        var myRecord = BlueButton(xml);

        myRecord.data.medications.forEach(function (item) {

            if (item.product.code === '314076') {
                myRecord.data.problems.forEach(function (problem) {
                    if (problem.code === '59621000') {
                        totalProblemsWithHT = totalProblemsWithHT + 1
                    }
                });
            }
        });
    }


}

console.log('How many of patients are receiving "lisinopril" and have a problem of "essential hypertension" (code = "59621000") :' + totalProblemsWithHT);