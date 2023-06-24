//dos metodos para API whatsap
//token
//recibir mensajes

const VerifyToken=(req, res)=>{
    res.send("Ejempli hola");
}

const recibirMensaje=(req, res)=>{
    res.send("Ejempli mensaje");
}

module.exports={
    VerifyToken,
    recibirMensaje
}