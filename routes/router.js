import {express} from "express";

//Declaração de construtor para criar o roteamento automático pelo express
let router = express.Router();
//Definição de como o mapeamento / se comportará, via função callback
router.get(
    "/", function(req,res){
        console.log("Chegou no /");
        res.status(200).json({
            message:"Conectou normalmente!"});
    });
//Externalização do valor da variável router
export default router;
