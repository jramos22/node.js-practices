const colors = require('colors/safe');
const args = process.argv.slice(2);
const [nombre = "Amigo"] = args;
const hora = new Date().getHours();

if(hora >= 6 && hora < 12){
    console.log(colors.green(`Buenos días ${nombre}`));
} else if (hora >= 12 && hora < 18){
    console.log(colors.bgYellow(`Buenas tardes ${nombre}`));
} else {
    console.log(colors.cyan(`Buenas noches ${amigo}`));
}