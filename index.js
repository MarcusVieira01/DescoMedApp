import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";
import db from "../DescoMedApp/database/database.js"

// Declaração de constutor de uma objeto express
const app = express();
//Uso para requisição e resposta
const {json,urlencoded} = pkg;
//Para a aplicação usar o pacote json
app.use(json());
//Para uso no mapeamento precisamos incluir o dicionário de parâmetros
app.use(urlencoded({extended:true}));

//Declaração de escuta de porta 3000 para carregamento do servidor
app.listen(3001, function(){
    console.log("Listening port 3001!")
})

//Declaração rota raíz vindo do módulo router
app.use("/", router)
