import {mongo, mongoose} from "mongoose"

//Construção do schema no MongoDB
const Schema = mongoose.Schema;
//Declaração de schema com os campos necessários para definição da entidade
const prescriptionSchema = new Schema({
    prescriptiolnId:{
        type: String,
        required: [true, "Prescription ID is required"]
    },
    date:{
        type: Date,
        required: [true, "Prescription Date is required"]
    },
    appointmentId:{
        type: String,
        required: [true, "Appointment Id is required"]
    },
    medicine:{
        type: String,
        required: [true, "Medicine is required"]
    },
    dosage:{
        type: String,
        required: [true, "Dosage is required"]
    },
    instructions:{
        type: String
    },
    createdAt:{
        type: Date,
        required: [true, "Create Date is required"]
    }
})
//Criação da entidade com nome Prescription usando prescriptionSchema
const prescription = mongoose.model("Prescription", prescriptionSchema);
//Exportação do valor da variável prescription
export default prescription;
