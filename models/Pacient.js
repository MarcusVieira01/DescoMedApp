import {mongoose} from "mongoose"

//Construção do schema no MongoDB
const Schema = mongoose.Schema;
// Declaração de schema com os campos necessários para definição da entidade
const pacientSchema = new Schema({
    pacientId:{
        type: String,
        required: [true, "Pacient ID is required"]
    },
    name:{
        type: String,
        required: [true, "Name of Pacient is required"]
    },
    birthDate:{
        type: Date
    },
    email:{
        type: String,
        required: [true, "Pacient Email is required"]
    },
    phone:{
        type: String,
        required: [true, "Patient Phone is required"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
}) 
//Criação da entidade com nome Pacient usando o pacientSchema
const pacient = mongoose.model("Pacient", pacientSchema);
//Exportação do valor da variável pacient
export default pacient;
