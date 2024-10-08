import {mongoose} from "mongoose"

//Construção do schema no MongoDB
const Schema = mongoose.Schema;
// Declaração de schema com os campos necessários para definição da entidade
const pacientSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name of Pacient is required"]
    },
    birthDate:{
        type: Date,
        required: [true, "Pacient Birth Date is required"]
    },
    email:{
        type: String,
        required: [true, "Pacient Email is required"]
    },
    phone:{
        type: String,
        required: [true, "Doctor Phone is required"],
        //Declaração de validador usando REGEX para definir como um número telefônico deve parecer
        validate: {
            validator: function(v){
                return /\d[2] 9\d{4}-\d{4}/.test(v)
            },
            message: props => `${props.value} This is not a valid phone value. Please use the following format XX 9XXXX-XXXX`
        }
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
