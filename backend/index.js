const express =  require('express');
const conectarDB = require('./config/db');

//creo servidor
const app = express();

//conectar a db
conectarDB();

//habilitar express.json
app.use(express.json({ extended: true }));

// puerto de app
const PORT = process.env.PORT || 4000;

app.use('/api/productos', require('./routes/productos'));

app.listen(PORT, () => {
    console.log(`el servidor esta trabajando en el puerto ${PORT}`)
})
