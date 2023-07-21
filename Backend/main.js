const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.MONGODB_PORT;

const app = express();

app.use(express.json());  

mongoose.connect(process.env.MONGODB_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( () => {console.log("Conexión establecida a la base de datos.")} ) 
.catch( (error) => {console.log("Error al establecer conexión a la base de datos.", error)} )
  
// app.use(users);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});