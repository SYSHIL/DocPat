import { mongoose } from "mongoose"

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
  },
  time: {
    type: Date,
    required: true
  },
  completed: Boolean,
  remarks: String
});

export default mongoose.model('Appointment', appointmentSchema);