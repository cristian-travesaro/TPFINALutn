const router = require('../routes/admin/novedades');
const pool = require('./bd');

// Obtener novedades ordenadas por ID descendente para mostrar las más recientes primero
async function getNovedades() {
    try {
        const query = 'SELECT * FROM novedades ORDER BY id DESC';  // O por fecha si tienes un campo de fecha
        const [rows] = await pool.query(query);
        console.log(rows); // Mostrar los resultados obtenidos
        return rows;
    } catch (error) {
        console.error('Error al obtener novedades:', error);
        throw error;
    }
}

// Insertar novedad
async function insertNovedad(obj) {
    try {
        const query = "INSERT INTO novedades SET ?";
        const result = await pool.query(query, [obj]); // Eliminamos la destructuración aquí
        console.log('Novedad insertada con ID:', result.insertId); // Imprimir el ID insertado
        return result; // Retornar el resultado de la inserción
    } catch (error) {
        console.error('Error al insertar novedad:', error);
        throw error; // Lanzar error si ocurre alguno
    }
}

async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    try {
        const query = 'SELECT * FROM novedades WHERE id = ?';
        const [rows] = await pool.query(query, [id]);
        console.log(rows); // Mostrar los resultados obtenidos
        return rows[0]; // Retornar solo el primer resultado
    } catch (error) {
        console.error('Error al obtener la novedad:', error);
        throw error;
    }
}

async function modificarNovedadById(obj, id) {
    try {
        const query = 'update novedades set ? WHERE id=?';
        const [rows] = await pool.query(query, [obj ,id]);
        console.log(rows); // Mostrar los resultados obtenidos
        return rows; // Retornar solo el primer resultado
    } catch (error) {
        console.error('Error al obtener la novedad:', error);
        throw error;
    }
}



module.exports = { getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById }
