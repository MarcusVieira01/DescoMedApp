import appointment from "../models/Appointment.js"

//Declaração de métodos assíncronos para leitura (READ) de dados da entidade Appointment
//Get All Registers
const getAllAppointments = async() => {
    return await appointment.find();
}
//Get a Register by Id
const getAppointment = async(id) => {
    try {
        return await appointment.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}
//Declaração de método assíncrono para gravação (CREATE) de um Appointment criando umm novo Prescription por relacionamento
const saveAppointment = async({date, doctorId, pacientId}) => {
    try {
        const prescription = new appointment({date, doctorId, pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error)
    }
}
//Declaração de método assíncrono para atualização (UPDATE) de um Appointment, e senão houver registro, será criado automaticamente
const updateAppointment = async(id, {date, doctorId, pacientId}) => {
    try {
        return await appointment.findByIdandUpdate(id, {date, doctorId, pacientId}, {new: true})
    } catch (error) {
        throw new Error(error)
    }
}
//
const deleteAppointment = async(id) => {
    try {
        return await appointment.findByIdandUpdate(id);
    } catch (error) {
        throw new Error(erro)
    }
}

const appointmentRepository = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
};

export default appointmentRepository;