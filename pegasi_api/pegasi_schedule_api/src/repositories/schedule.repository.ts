import mongoose from 'mongoose';
import { Schedule } from './../models/schedule.model';

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema<Schedule>({
    paciente: {
        nombre: { type: String },
        dni: { type: String },
        fechaNacimiento: { type: String },
        fechaFachecimiento: { type: String },
        cidudadNacimiento: { type: String },
        fallecido: { type: Boolean },
        direccion: { type: String },
        email: { type: String },
        casado: { type: Boolean },
    },
    fechaRegistro: { type: Date },
    fechaInicio: { type: Number },
    fechaFinal: { type: Number }
});


module.exports = mongoose.model<Schedule>("ScheduleSchema", ScheduleSchema);