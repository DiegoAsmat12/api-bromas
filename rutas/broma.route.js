const express = require("express");

const BromaRouter = express.Router();

const ControladorBroma = require('./../controladores/broma.controller');

BromaRouter.get("",ControladorBroma.obtenerBromas);
BromaRouter.get("/random",ControladorBroma.obtenerBromaRandom);
BromaRouter.get("/:id",ControladorBroma.obtenerBromaPorId);
BromaRouter.post("",ControladorBroma.agregarBroma);
BromaRouter.put("/update/:id",ControladorBroma.updateBromaPorId);
BromaRouter.delete('/delete/:id',ControladorBroma.deleteBroma);
module.exports = BromaRouter;