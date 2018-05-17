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
  fs.writeFile('directiory_content.txt', data, function(err){
    if (err) throw err; // if error appears, return expection/console.error
    console.log('Saved!'.blue);
    fs.readFile('directiory_content.txt', 'utf-8', function(err, data) {
        console.log(data.bgMagenta.yellow);
    });
  });
});
