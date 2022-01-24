const mysql = require('mysql');

const conexion = mysql.createConnection(
    {
        host: 'localhost',
        database:'pruebas',
        user:'root',
        password:''
    }
);

const crearConexion = () => {

    conexion.connect(function(err) {
        if(err){
            console.error(`Error en la conexión: ${err.stack}`);
            return
        } else {
            console.log('Conexion exitosa');
        }
    });

    //conexion.end();
}

const cerrarConexion = () => {
    conexion.end();
    console.log('Conexión cerrada');
}

module.exports = {
    crearConexion,
    cerrarConexion
}