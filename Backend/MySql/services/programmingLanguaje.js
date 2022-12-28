const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function read(page = 1) {
    const offset = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(
        'SELECT * FROM lenguajes_programacion'
    );

    const data = helper.emptyRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

async function create(programmingLanguaje) {
    const result = await db.query(
        'INSERT INTO lenguajes_programacion (nombre, anho_salida, github_rank) VALUES (?, ?, ?)',
        [
            programmingLanguaje.nombre,
            programmingLanguaje.anho_salida,
            programmingLanguaje.github_rank
        ]
    );
}

async function update(id, programmingLanguaje) {
    const result = await db.query(
        'UPDATE lenguajes_programacion SET nombre=?, anho_salida=?, github_rank=? WHERE id=?',
        [
            programmingLanguaje.nombre,
            programmingLanguaje.anho_salida,
            programmingLanguaje.github_rank,
            id
        ]
    );
}

async function delete1(id) {
    const result = await db.query(
        'DELETE FROM lenguajes_programacion WHERE id=?',
        [id]
    );
}

module.exports = {
    create,
    read,
    update,
    delete1
};