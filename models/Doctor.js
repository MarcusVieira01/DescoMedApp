import { Mongoose, mongoose } from "mongoose";

//Construção de schema MongoDB
const Schema = mongoose.Schema;
//Declaração de schema com os campos necessários para definição da entidade
const doctorSchema = new Schema({
    name:{
        type: String,
        required: [true, "Doctor Name is required"]
    },
    login:{
        type: String,
        required: [true, "Doctor Login is required"],
        unique: [true]
    },
    password:{
        type: String,
        required: [true, "Doctor Password is required"]
    },
    speciality:{
        type: String,
        required: [true, "Doctor Speciality is required"]
    },
    medicalRegistration:{
        type: String,
        required: [true, "Doctor Medical Registration is required"],
        unique: [true]
    },
    email:{
        type: String,
        required: [true, "Doctor Email is required"],
        unique: [true]
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
    createdAt: {
        type: Date,
        default: Date.now
    }});
//Criação da entidade com nome Doctor usando o doctorSchema
const doctor = mongoose.model("Doctor", doctorSchema);
//Exportação do valor da variável doctor
export default doctor
