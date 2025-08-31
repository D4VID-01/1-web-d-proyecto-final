import mongoose, { Schema } from "mongoose";

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    edad: {
        type: Number,
        require: true,
        trim: true
    }, 
    grupo:{
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

export default mongoose.model('alumnoModel', alumnoSchema);