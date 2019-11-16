import mongoose from 'mongoose';

const SMSSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
    },
    destinatario: {
      type: String,
    },
    msg: {
      type: String,
    },
    sequencia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('SMS', SMSSchema);
