import express from "express";
import appointmentService from "../services/AppointmentService.js";

let router = express.Router();

//Criação de rota para acesso ao método getAllAppointments
router.get('/appointments', async(req, res) => {
        try {
            const appointments = await appointmentService.getAllAppointments();
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
        const appointment = await appointmentService.getAppointment(id);
        res.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Criação de rota para acesso ao método saveAppointment
router.post('/postAppointment', async(req,res) => {
    const {date, doctorId, patientId} = req.body;
    try {
        const appointment = await appointmentService.saveAppointment({date, doctorId, patientId});
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
        const appointment = await appointmentService.updateAppointment(id, {date, doctorId, patientId});
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
        const appointment = await appointmentService.deleteAppointment(id);
        res.send(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//Exportação do retorno do método router()
export default router;