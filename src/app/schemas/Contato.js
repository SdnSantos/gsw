import mongoose from 'mongoose';

const ContatoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      require: true,
    },
    telefone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Contato', ContatoSchema);
