require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT,
    dbConnection = require('./config/config'),
    furnitureRoutes = require('./routes/furnitureRoutes'), 
    cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));////REQUERIR Y ACCEDER URLENCODED Y JSON:  Middleware para manejar datos de formulario y JSON
app.use(express.json());

dbConnection();

app.use('/', furnitureRoutes); 

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})