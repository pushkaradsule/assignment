var fs = require('fs');
var BlueButton = require('bluebutton');
var xml = fs.readFileSync('Patient-100.xml', 'utf-8');
var myRecord = BlueButton(xml);

console.log(myRecord.data.demographics);