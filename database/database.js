import { mongoose } from "mongoose";

//Declaração de ponto de conexão
mongoose.connect("mongodb://localhost:27017/medapp");
//Criará a conexão com o BD
const db = mongoose.connection;
//Em caso de erro fará o bind da mensagem de erro com a mensagem padrão, no console
db.on('error', console.error.bind(console, "connection error: "));
//Execução da função callback para sucesso de conexão, usanodo método .once(args)
db.once(
    "open", function(){
        console.log("DataBase connect successfully!");
    }
);
//Exportação do valor da variável db
export default db;
