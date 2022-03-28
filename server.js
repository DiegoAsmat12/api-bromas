const express = require("express");
const BromaRouter = require("./rutas/broma.route");

require('./config/config');

const app = express();
app.use(express.json());
app.use("/api/bromas",BromaRouter);


app.listen(8080, ()=>{
    console.log("El servidor está activo en el puerto 8080");
});

