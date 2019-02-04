const descripcion = {
    alias: 'd',
    demand: true,
    desc: ' Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: ' Marca como terminada la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Modifica las tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina  una tarea por hacer', {
        descripcion
    })

.help()

.argv

module.exports = {
    argv
}