import { mongoose } from "mongoose"

const appointmentSchema = new mongoose.Schema({

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
    required: true
  },

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['booked', 'completed', 'missed'],
    default: 'booked'
  }
});

export default mongoose.model('Appointment', appointmentSchema);