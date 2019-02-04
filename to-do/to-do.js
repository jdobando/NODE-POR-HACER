const fs = require('fs');

let todoList = [];

const guardarDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo Grabar', err);


    });
}

const cargarDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch {
        todoList = [];
    }

    // console.log(todoList);
}
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    todoList.push(porHacer);
    guardarDB();
    return porHacer;


}

const getListado = () => {
    cargarDB();
    return todoList;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        todoList[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}

const borrar = (descripcion) => {

    cargarDB();
    let newList = todoList.filter(tarea => tarea.descripcion !== descripcion);

    if (todoList.length === newList.length) {
        return false;
    } else {
        todoList = newList;
        guardarDB();
        return true;
    }



}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}