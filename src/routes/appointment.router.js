import express from 'express';
import {bookAppointment,cancelAppointment} from '../controllers/appointment.controller.js';
const router=express.Router();
//Route to book appointment

router.post('/',bookAppointment);

//Route to cancel appointment
router.delete('/cancel/:appointmentId/:professorId',cancelAppointment);

export default router;

