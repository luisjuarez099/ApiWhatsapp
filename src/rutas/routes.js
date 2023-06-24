const express = require("express");
const ruta=express.Router();
const whatsappControler = require("../controler/whatsappControler")

ruta
.get("/", whatsappControler.VerifyToken)
.post("/", whatsappControler.recibirMensaje)

module.exports=ruta;