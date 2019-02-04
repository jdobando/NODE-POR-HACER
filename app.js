const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./to-do/to-do');


let commando = argv._[0];

switch (commando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('xxxxxxxxx POR HACER ========='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.green);
        }
        // console.log('Listar las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualizacion: ${actualizado} `);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;


    default:
        console.log('Comando no reconocido');
        break;

}