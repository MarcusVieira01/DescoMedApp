import {express} from "express";
import appointmentController from "./AppointmentController.js"
import doctorController from "./DoctorController.js"
import pacientController from "./PacientController.js"
import prescriptionController from "./PrescriptionController.js"

//Declaração de construtor para criar o roteamento automático pelo express
let router = express.Router();
//Definição de como o mapeamento / se comportará, via função callback
router.get(
    "/", function(req,res){
        console.log("Chegou no /");
        res.status(200).json({
            message:"Conectou normalmente!"});
    });
//Mapeamento de rotas usadas
router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

//Externalização do valor da variável router
export default router;
