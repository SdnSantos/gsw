import mongoose from 'mongoose';

const SMSSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
      required: true,
    },
  }
  //   },
  //   codigo: {
  //     type: String,
  //   },
  //   usuario: {
  //     type: String,
  //     required: true,
  //   },
  //   destino: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // {
  //   timestamps: true,
  // }
);

export default mongoose.model('SMS', SMSSchema);
