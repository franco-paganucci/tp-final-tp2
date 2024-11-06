import express from "express";
// import routes from "./routes/routes.js";

// creo el server
const app = express();
const port = 3000

// ---------------
// fundamentales
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// midlewares

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})