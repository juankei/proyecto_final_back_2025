"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var cors = require('cors');
app.use(cors());
var db = __importStar(require("./db-connection"));
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
app.get('/pregunta/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /pregunta');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3\n        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id WHERE respuestas.pregunta_id = " + req.params.id + " ")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/pregunta1', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /pregunta1');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3\n        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE respuestas.pregunta_id = 1 ;")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/respuestas', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /pregunta1');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT preguntas.id AS pregunta_id, preguntas.texto_pregunta, preguntas.categoria, preguntas.imagen_url, respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3\n        FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE respuestas.pregunta_id = 1 ;")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error(err_3);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/user/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /user/:email');
                console.log("peticion recibida por URL " + req.params.email);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios WHERE id ='" + req.params.email + "'")];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.lenght > 0) {
                    res.json(db_response.rows[0]);
                    console.log('usuario encontrado');
                }
                else {
                    console.log('usuario no encontrado');
                    res.json('user not found');
                }
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/adduser', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var checkQuery, checkResult, query, db_response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /adduser. \n        Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                checkQuery = "SELECT * FROM usuarios WHERE id = '" + req.body.id + "' ;";
                return [4 /*yield*/, db.query(checkQuery)];
            case 2:
                checkResult = _a.sent();
                if (checkResult.rows.length > 0) {
                    console.log("el usuario ya existe");
                }
                if (req.body.id = 'undefined') {
                    console.log('no señor');
                }
                query = "INSERT INTO usuarios (id,nombre_usuario) VALUES ('" + req.body.id + "','" + req.body.nombre_usuario + "');";
                console.log(query);
                return [4 /*yield*/, db.query(query)];
            case 3:
                db_response = _a.sent();
                res.json("Registro guardado correctamente.");
                return [3 /*break*/, 5];
            case 4:
                err_5 = _a.sent();
                console.error(err_5);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post('/addusername', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /addusername. \n        Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "UPDATE usuarios SET username = '" + req.body.username + "' WHERE id = '" + req.body.id + "';";
                console.log(query);
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows);
                res.json("Registro guardado correctamente.");
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error(err_6);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/showusername/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /showusername');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios WHERE id = '" + req.params.email + "';")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                console.error(err_7);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/addScore', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var checkQuery2, checkResult2, db_data, query, db_response, query_respuestas, db_res, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /addscore. \n        Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                checkQuery2 = "SELECT * FROM usuarios WHERE id  = '" + req.body.id + "' ;";
                return [4 /*yield*/, db.query(checkQuery2)];
            case 2:
                checkResult2 = _a.sent();
                return [4 /*yield*/, db.query("SELECT * FROM usuarios WHERE id = '" + req.body.id + "'")];
            case 3:
                db_data = _a.sent();
                console.log(db_data);
                if (!(db_data.rows.length > 0 && checkResult2.rows.length > 0)) return [3 /*break*/, 5];
                query = "UPDATE usuarios SET puntos = " + req.body.score + " WHERE id = '" + req.body.id + "';";
                console.log(query);
                return [4 /*yield*/, db.query(query)];
            case 4:
                db_response = _a.sent();
                res.json("el usuario " + req.body.id + " se le ha actualizado la puntuacion");
                console.log(db_response.rows);
                return [3 /*break*/, 7];
            case 5:
                query_respuestas = "INSERT INTO usuarios (id,puntos) VALUES ('" + req.body.id + "', " + req.body.score + ");";
                console.log(query_respuestas);
                return [4 /*yield*/, db.query(query_respuestas)];
            case 6:
                db_res = _a.sent();
                console.log(db_res.rows);
                _a.label = 7;
            case 7:
                console.log('\x1b[33m%s\x1b[0m', 'usuario no encontrado');
                return [3 /*break*/, 9];
            case 8:
                err_8 = _a.sent();
                console.error(err_8);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
app.get('/score/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /score');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios ORDER BY puntos DESC ")];
            case 2:
                db_response = _a.sent();
                console.log(req.params.user);
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                console.error(err_9);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/answers/:id_ans', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /answers');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT preguntas.id AS pregunta_id,respuestas.respuesta_correcta, respuestas.opcion_1, respuestas.opcion_2, respuestas.opcion_3\n       FROM preguntas INNER JOIN  respuestas ON preguntas.id = respuestas.pregunta_id  WHERE pregunta_id = " + req.params.id_ans)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_10 = _a.sent();
                console.error(err_10);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/allUsers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /answers');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_11 = _a.sent();
                console.error(err_11);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/substractPoints', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var checkQuery2, checkResult2, puntos_actualizados, updateQuery, dbResponse, updatedUser, today, fecha, query_usario, db_res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /substractPoints. \n      Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                checkQuery2 = "SELECT * FROM usuarios WHERE id = '" + req.body.id + "' ;";
                return [4 /*yield*/, db.query(checkQuery2)];
            case 2:
                checkResult2 = _a.sent();
                if (checkResult2.rows.length === 0) {
                    console.log('\x1b[33m%s\x1b[0m', 'Usuario no encontrado');
                    return [2 /*return*/, res.status(404).json({ message: 'Usuario no encontrado' })];
                }
                console.log(checkResult2);
                puntos_actualizados = checkResult2.rows[0].puntos - Number(10);
                if (puntos_actualizados < 0) {
                    puntos_actualizados = 0;
                }
                updateQuery = "UPDATE usuarios SET puntos = " + puntos_actualizados + " WHERE id = '" + req.body.id + "' RETURNING *;";
                return [4 /*yield*/, db.query(updateQuery)];
            case 3:
                dbResponse = _a.sent();
                if (!(dbResponse.rows.length > 0)) return [3 /*break*/, 5];
                updatedUser = dbResponse.rows[0];
                today = new Date();
                fecha = today.toLocaleDateString();
                query_usario = "INSERT INTO poder_eliminar (usuario_destino,usuario_origen,fecha,puntos_restados) VALUES ('" + req.body.id_origen + "','" + req.body.id + "','" + fecha + "',10);";
                console.log(query_usario);
                return [4 /*yield*/, db.query(query_usario)];
            case 4:
                db_res = _a.sent();
                // Enviar los datos actualizados en la respuesta
                return [2 /*return*/, res.json({
                        message: "Se ha eliminado la puntuaci\u00F3n del usuario " + req.body.id,
                        updatedUser: updatedUser // Aquí devolvemos los datos actualizados
                    })];
            case 5: 
            // Si no se pudo actualizar por alguna razón
            return [2 /*return*/, res.status(400).json({ message: 'No se pudo actualizar la puntuación' })];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                console.error('Error al procesar la petición:', error_1);
                return [2 /*return*/, res.status(500).json({ message: 'Error en el servidor' })];
            case 8: return [2 /*return*/];
        }
    });
}); });
app.get('/showPower/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_response, err_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /showPower/:email');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM poder_eliminar WHERE usuario_origen = '" + req.params.email + "';")];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_12 = _a.sent();
                console.error(err_12);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/delete_substract', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /delete_substract. \n        Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = " DELETE FROM poder_eliminar WHERE usuario_destino = '" + req.body.usuario_destino + "';";
                console.log(query);
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows);
                res.json("Registro guardado correctamente.");
                return [3 /*break*/, 4];
            case 3:
                err_13 = _a.sent();
                console.error(err_13);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var port = process.env.PORT || 3000;
app.listen(port, function () {
    return console.log("App listening on PORT " + port + ".\n\n    ENDPOINT:\n     - GET  /pregunta\n     - GET  /pregunta1\n     - GET  /user/:email\n     - POST /adduser\n     - POST /addusername\n     - GET  /showusername/:email\n     - POST /addScore\n     - GET  /score\n     - GET  /answers/:id_ans\n     - GET  /allUsers\n     - POST /substractPoints\n     \n    ");
});
