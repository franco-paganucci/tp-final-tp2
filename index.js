import express from "express";
import routes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";


// creo el server
const app = express();
const port = SERVER_PORT || 8000

// ---------------
// fundamentales
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// midlewares
await connection.sync({ alter: true });
app.use(routes);
app.use(notFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})