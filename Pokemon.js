import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    numeroPokedex: {
        type: Number,
        required: true
    },
    tipagem: {
        type: String,
        required: true
    },
    treinador: {
        type: String,
        required: true
    }

});

export default mongoose.model("Pokemon", userSchema);