import { mongoose } from "mongoose";
import Doctor from "./Doctor.js";
import Pacient from "./Pacient.js"

//Construção de schema MongoDB
const Schema = mongoose.Schema;
//Declaração de schema com os campos necessários para definição da entidade
const appointmentSchema = new Schema({
    date:{
        type: Date, //Data americana
        required: [true, 'Appointment Data is required']
    },
    doctorId:{
        type: String,
        required: [true, "DoctorId is required"],
        validate: {
            validator: function (v){
                //Convertendo uma string em um objeto ID para ser encontra do BD
                const id = new mongoose.Types.ObjectId(v);
                return Doctor.exists({_id:id});
            },
            message: props => `DoctorID${props.value} This is not a valid doctor ID!`
        }
    },
    patientId:{
        type: String,
        required: [true, "PacientID is required"],
        validate: {
            validator: function (v){
                //Convertendo uma string em um objeto ID para ser encontra do BD
                const id = new mongoose.Types.ObjectId(v);
                return Pacient.exists({_id:id});
            },
            message: props => `PacientID${props.value} This is not a valid pacient ID!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//Criação da entidade com nome Appontment usando o appointmentSchema
const appointment = mongoose.model("Appointment", appointmentSchema);
//Exportação do valor da variável appointment
export default appointment
