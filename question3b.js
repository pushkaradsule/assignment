var fs = require('fs');
var path = "c:/ccd";



var fs = require('fs');
var files = fs.readdirSync(path);
var BlueButton = require('bluebutton');
var totalCountMedicine = 0;

for (var i in files) {


    if (files[i].indexOf('.xml') > -1) {

        var xml = fs.readFileSync(files[i], 'utf-8');

        var myRecord = BlueButton(xml);

        myRecord.data.medications.forEach(function (item) {
            if (item.product.code === '314076') {
                totalCountMedicine = totalCountMedicine + 1
            }
        });
    }


}

console.log('How many are receiving the medication lisinopril (code = 314076) ' + totalCountMedicine);