import Appointment from "../models/Appointment.js"

//Declaração de métodos assíncronos para leitura (READ) de dados da entidade Appointments
//Get All Registers
const getAllAppointments = async() => {
    return await Appointment.find();
}
//Get a Register by Id
const getAppointment = async(id) => {
    try {
        return await Appointment.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}
//Declaração de método assíncrono para gravação (CREATE) de um Appointment criando umm novo Prescription por relacionamento
const saveAppointment = async({date, doctorId, pacientId}) => {
    try {
        const prescription = new Appointment({date, doctorId, patientId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error)
    }
}
//Declaração de método assíncrono para atualização (UPDATE) de um Appointment, e senão houver registro, será criado automaticamente
const updateAppointment = async(id, {date, doctorId, patientId}) => {
    try {
        return await Appointment.findByIdAndUpdate(id, {date, doctorId, patientId}, {new: true})
    } catch (error) {
        throw new Error(error)
    }
}
//
const deleteAppointment = async(id) => {
    try {
        return await Appointment.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error)
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