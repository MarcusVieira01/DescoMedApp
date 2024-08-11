import {express} from "express";
import AppointmentService from "../services/AppointmentService";

let router = express.Router();

//Criação de rota para acesso ao método getAllAppointments
router.get(
    '/appointments', async(req,res) => {
        try {
            const appointments = await AppointmentService.getAllAppointments();
            res.send(appointments);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });
//Criação de rota para acesso ao método getAppointment usando id
router.get('/getAppointment/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        res.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Criação de rota para acesso ao método saveAppointment
router.post('./postAppointment', async(req,res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.saveAppointment({date, doctorId, pacientId});
        res.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Criação de rota para acesso ao método updateAppointment
router.put('/putAppointments/:id', async(req,res) => {
    const {id} = res.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
        req.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Criação de rota para acesso ao método deleteAppointment
router.delete('/deleteAppointment/:id', async(req, res) =>{
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.deleteAppointment(id);
        res.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Exportação do retorno do método router()
export default router();