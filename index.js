let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'Docu.csv'; 
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

 
let json = csvToJson.getJsonFromCsv("Docu.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}
csvToJson.formatValueByType().getJsonFromCsv(fileInputName);