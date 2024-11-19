import express from "express";
import routes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import userSeed from './seed/userSeed.js';
import roleSeed from "./seed/roleSeed.js";
import productSeed from "./seed/productSeed.js";
import orderStateSeed from "./seed/orderStateSeed.js";


// creo el server
const app = express();
const port = SERVER_PORT || 8000

// ---------------
// fundamentales
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// midlewares
app.use(routes);
app.use(notFound);

await connection.sync();
await roleSeed();
await userSeed();
await productSeed();
await orderStateSeed();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})