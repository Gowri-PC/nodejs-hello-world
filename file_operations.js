// console.log("In the file operations code");

// Importing the superheroes package
const superheroes = require('superheroes');

// Using the file module of nodejs
const fs = require('fs');

// Read the file
var file_names = ["text1.txt", "text3.txt"];
var x;
for (var x=0; x < file_names.length; x++){
	file_name = 'files/' + file_names[x];
	fs.readFile(file_name, 'utf-8', (err, data) => {
		if(err) throw err;
		console.log(data);
	});	
}

// Rename an existing file = text2.txt - text3.txt
fs.rename('files/text3.txt', 'files/text2.txt', (err) => {
	if(err) throw err;
	console.log('Renamed the file successfully!');
});



// Experimenting with the superheroes package
console.log('Super hero name:');
console.log(superheroes.random());