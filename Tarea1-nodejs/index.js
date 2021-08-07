const fs = require('fs')
let path = process.cwd();
let disney = [];
const informacion = ["Nombre, Apellido, Edad\n", "Olver, Brown, 20\n", "Jack, Murphy, 35\n", "Charlie, Rodriguez, 38\n", "George, Smith, 22\n", "James, Anderson, 23\n", "Willian, Walsh. 25\n"];
for (let i = 0; i < informacion.length; i++) {
    fs.appendFile(`${path}/Información.txt`, informacion[i], function(err, data){
        if(err)
            return console.error(err)
        console.log('Archivo creado y salvado');
    });
}

fs.readFile(`${path}/disney_movies.txt`, 'UTF-8', function(err, data){
    if(err){
        return console.error(err);
    }
    disney.push(data);

    fs.appendFile('datospeli.txt',`\n \r${disney}`,function(err,data){
        if(err){
            return console.log(err);
        }
    })
});
