var fs = require('fs');
var colors = require('colors');
var testFolder = '../13.7_File_System/';

fs.readdir(testFolder, function (err, files)  {
  if (err ) {
    return console.error(err);
  }
   files.forEach( function (file) {
     console.log(file.green);
   });
    var files = files;
    var data = files.toString();
    var myData = data.replace(/,/g,  ", ");
  fs.writeFile('directory_content.txt', myData, setData);
});

function setData(err) {
  if (err) throw err; // if error appears, return expection/console.error
  console.log('Saved!'.blue);
  fs.readFile('directory_content.txt', 'utf-8', readData);
}

function readData(err, myData ) {
    console.log(myData.split(", "));
}
