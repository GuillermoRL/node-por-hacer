let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}
let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', "Crear un elemento por hacer", {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado: completado
    })
    .command('borrar', "Eliminar un elemento por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}