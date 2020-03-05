//importando mongoose
import mongoose from 'mongoose';
//se utiliza el metodo Schema de mongoose
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  //modelo que tiene la estructura de la nota
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  descripcion: String,
  usuarioId: String,
  date:{type: Date, default: Date.now},
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;
