var fs = require('fs');

fs.readFile('Input.json', (err, data) =>{
var fileContent=JSON.parse(data);
fileContent.employee1.name='Divya';
console.log(fileContent);
fs.writeFile('Output.json',JSON.stringify(fileContent),  (err) =>{
  if (err) throw err;
  else
  console.log("Write Successfully");

});
});
