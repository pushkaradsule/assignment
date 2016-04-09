var fs = require('fs');
var BlueButton = require('bluebutton');
var xml = fs.readFileSync('Patient-101.xml', 'utf-8');
var myRecord = BlueButton(xml);

console.log("code system for patient-101.xml : " + myRecord.data.results[0].tests[0].code_system);