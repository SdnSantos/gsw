import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
    },
    metodo: {
      type: String,
    },
    rota: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('LOG', LogSchema);
