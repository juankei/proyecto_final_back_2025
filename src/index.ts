import express from "express";
const app = express();

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

const cors = require('cors');
app.use(cors());
import * as db from './db-connection';




/*app.get('/peleadores/:apellido', async (req, res) => {
    console.log('Petición recibida al endpoint GET /peleadores');
    try {
        let db_response = await db.query(`SELECT * FROM Peleadores WHERE apellido = '${req.params.apellido}';`);
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});

app.post('/nuevo', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /nuevo. 
        Body:${JSON.stringify(req.body.fields)}`);
    try {
        let query = `INSERT INTO Peleadores (nombre, apellido, record, nacionalidad, imagen) 
         VALUES ('${req.body.nombre}', '${req.body.apellido}', '${req.body.record}' , '${req.body.nacionalidad}', '${req.body.imagen}');`;
        console.log(query);

        let db_response = await db.query(query);
        console.log(db_response);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/eliminar', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /eliminar. 
        Body:${JSON.stringify(req.body)}`);
    try {
        let query = `DELETE FROM  ${req.body.tabla}  WHERE nombre = '${req.body.nombre}';`;
        console.log(query);

        let db_response = await db.query(query);
        console.log(db_response);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}); */


app.get('/pregunta/:id', async (req, res) => {
    console.log('Petición recibida al endpoint GET /pregunta');
    try {
        let db_response = await db.query(`SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3
        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id WHERE respuestas.pregunta_id = ${req.params.id} ` );
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});
app.get('/pregunta1', async (req, res) => {
    console.log('Petición recibida al endpoint GET /pregunta1');
    try {
        let db_response = await db.query(`SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3
        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE respuestas.pregunta_id = 1 ;` );
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});


app.get('/respuestas', async (req, res) => {
    console.log('Petición recibida al endpoint GET /pregunta1');
    try {
        let db_response = await db.query(`SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3
        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE respuestas.pregunta_id = 1 ;` );
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});


app.get('/user/:email', async (req, res) => {
    console.log('Petición recibida al endpoint GET /user/:email');
    console.log (`peticion recibida por URL ${req.params.email}`)
    try {
        let db_response = await db.query(`SELECT * FROM usuarios WHERE id ='${req.params.email}'` );

        if (db_response.rows.lenght > 0){
            res.json(db_response.rows[0]);
        } else {
            console.log ('usuario no encontrado')
            res.json('user not found')
        }
        
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});





app.post('/adduser', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /adduser. 
        Body:${JSON.stringify(req.body)}`);
    try {


        let checkQuery = `SELECT * FROM usuarios WHERE id = '${req.body.id}' ;`;
        let checkResult = await db.query(checkQuery);


        if (checkResult.rows.length > 0) {
         console.log(`el usuario ya existe`)
        }

        let query = `INSERT INTO usuarios (id,nombre_usuario) VALUES ('${req.body.id}','${req.body.nombre_usuario}');`
        console.log(query);
        let db_response = await db.query(query);

        
   
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/addusername', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /addusername. 
        Body:${JSON.stringify(req.body)}`);
    try {

        let query = `UPDATE usuarios SET username = '${req.body.username}' WHERE id = '${req.body.id}';`
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response.rows);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/showusername/:email', async (req, res) => {
    console.log('Petición recibida al endpoint GET /showusername');
    try {
        let db_response = await db.query(`SELECT * FROM usuarios WHERE id = '${req.params.email}';` );
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});



app.post('/addScore', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /addscore. 
        Body:${JSON.stringify(req.body)}`);
    try {


        
        let checkQuery2 = `SELECT * FROM respuestas_usuario WHERE usuario_id  = '${req.body.id}' ;`;
        let checkResult2 = await db.query(checkQuery2);
        

        let db_data = await db.query(`SELECT * FROM respuestas_usuario WHERE usuario_id = '${req.body.id}'` );
        console.log(db_data)
        //console.log (db_response)
        if (db_data.rows.length > 0  && checkResult2.rows.length > 0  ){
                   
            let query = `UPDATE respuestas_usuario SET puntos = ${req.body.score} WHERE usuario_id = '${req.body.id}';`
            console.log(query);
            let db_response = await db.query(query);
            
            
            res.json(`el usuario ${req.body.id} se le ha actualizado la puntuacion` )

        
        console.log(db_response.rows);


        } else { let query_respuestas = `INSERT INTO respuestas_usuario (usuario_id,puntos) VALUES ('${req.body.id}', ${req.body.score});`
        console.log(query_respuestas);
        let db_res = await db.query(query_respuestas);
        
        console.log (db_res.rows)
        }

        
            console.log ('\x1b[33m%s\x1b[0m','usuario no encontrado')

            
      
            
           
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/score/', async (req, res) => {
    console.log('Petición recibida al endpoint GET /score');
    try {
        let db_response = await db.query(`SELECT * FROM respuestas_usuario ` );
        console.log(req.params.user)
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});


app.get('/answers/:id_ans', async (req, res) => {
    console.log('Petición recibida al endpoint GET /answers');
    try {
        let db_response = await db.query(`SELECT preguntas.id AS pregunta_id,respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3
       FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE pregunta_id = ${req.params.id_ans}`);
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});


app.get('/allUsers', async (req, res) => {
    console.log('Petición recibida al endpoint GET /answers');
    try {
        let db_response = await db.query(`SELECT * FROM respuestas_usuario`);
        console.log(db_response);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});





app.post('/substractPoints', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /substractPoints. 
      Body:${JSON.stringify(req.body)}`);
    
    try {
      // Verificar si el usuario existe
      let checkQuery2 = `SELECT * FROM respuestas_usuario WHERE usuario_id  = '${req.body.id}' ;`;
      let checkResult2 = await db.query(checkQuery2);
      
      if (checkResult2.rows.length === 0) {
        console.log('\x1b[33m%s\x1b[0m', 'Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      console.log(checkResult2)
       let puntos_actualizados = checkResult2.rows[0].puntos - Number(10)

      // Actualizar los puntos a 0 y obtener los datos con RETURNING
      let updateQuery = `UPDATE respuestas_usuario SET puntos = ${puntos_actualizados} WHERE usuario_id = '${req.body.id}' RETURNING *;`;
      let dbResponse = await db.query(updateQuery);
      
      // Verificar si la consulta de actualización fue exitosa
      if (dbResponse.rows.length > 0) {
        // Aquí están los datos del usuario actualizado
        const updatedUser = dbResponse.rows[0];  // Datos de la fila actualizada
        
        let today = new Date();
        let fecha = today.toLocaleDateString();  // Ejemplo: "2/11/2025"
        

        let query_usario = `INSERT INTO poder_eliminar (usuario_destino,usuario_origen,fecha,puntos_restados) VALUES ('${req.body.id_origen}','${req.body.id}','${fecha}',10);`
        console.log(query_usario);
        let db_res = await db.query(query_usario);

        // Enviar los datos actualizados en la respuesta
        return res.json({
          message: `Se ha eliminado la puntuación del usuario ${req.body.id}`,
          updatedUser: updatedUser  // Aquí devolvemos los datos actualizados
        });
      } else {
        // Si no se pudo actualizar por alguna razón
        return res.status(400).json({ message: 'No se pudo actualizar la puntuación' });
      }
    } catch (error) {
      console.error('Error al procesar la petición:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  });



const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINT:
     - GET  /pregunta
     - GET  /pregunta1
     - GET  /user/:email
     - POST /adduser
     - POST /addusername
     - GET  /showusername/:email
     - POST /addScore
     - GET  /score
     - GET  /answers/:id_ans
     - GET  /allUsers
     - POST /substractPoints
     
    `));