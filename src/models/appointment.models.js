import mongoose from 'mongoose';

//schema for appointment slots
//defines the structure of booked slot in database
const appointmentSchema = new mongoose.Schema({
  studentname: { type: String, ref: 'User_type', required: true },
  professorname: { type: String, ref: 'User_type', required: true },
  slot: { type: mongoose.Schema.Types.ObjectId, ref: 'Availability', required: true },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});

export default mongoose.model('Appointment_slot', appointmentSchema);