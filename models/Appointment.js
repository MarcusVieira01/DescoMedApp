import { Mongoose, mongoose } from "mongoose";

//Construção de schema MongoDB
const Schema = mongoose.Schema;
//Declaração de schema com os campos necessários para definição da entidade
const appointmentSchema = new Schema({
    date:{
        type: Date,
        required: [true, 'Appointment Data is required'],
        unique: [true]
    },
    doctorId:{
        type: String,
        required: [true, "DoctorId is required"]
    },
    patientId:{
        type: String,
        required: [true, "PacientID is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }});
//Criação da entidade com nome Appontment usando o appointmentSchema
const appointment = mongoose.model("Appointment", appointmentSchema);
//Exportação do valor da variável appointment
export default appointment
