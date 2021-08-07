const fs = require('fs')// nos permite manipular archivos guardar, crear y almacenar archivos
let path = process.cwd();

const user = {
    "id": 1,
    "name": "Jhon Doe",
    "age": 22
};
const data = JSON.stringify(user);
fs.writeFile(`${path}/holamundo.json`, data, function(err, data){
    if(err)
        return console.error(err)
    console.log('Archivo creado y salvado');
});
//Crea si no existe y si existe agrega contanido al final \n me permite hacer un salto de linea
fs.appendFile(`${path}/holamundo.txt`, "Hola mundo \ny José Ramos Barquero", function(err, data){
    if(err)
        return console.error(err)
    console.log('Archivo creado y salvado');
});

fs.readFile(`${path}/holamundo.txt`, 'utf8', function(err, data){
    if(err)
        return console.error(err)
        console.log(JSON.stringify(data));
        console.log(data);
});

fs.open(`${path}/nuevoarchivo.txt`, 'w', function(err, fd){
    if(err)
        return console.error(err)
    fs.write(fd, 'Esta es mi primera linea', 'utf8', function (err) {
        if(err)
            return console.error(err)
    })
});
fs.unlick(`${path}/nuevoarchivo.txt`, function (err) {
    if(err)
        return console.error(err)
    console.log('Se ha eliminado el archivo')
});