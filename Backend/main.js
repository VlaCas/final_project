import app from './app.js'
import { connectDB, port } from './database.js'

connectDB();

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});