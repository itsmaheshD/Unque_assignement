import Appointment_slot from '../models/appointment.models.js';
import Slot_register from '../models/register_slot.models.js';

//controller to book professor appointment
export const bookAppointment=async (requestAnimationFrame,res)=>{
    try{
        const {studentId,professorId,slotId}=req.body;
        const slot=await Slot_register.findById(slotId);
        if(!slot||slot.isbook){
            res.status(400).json({message:"Slot is booked"});
        }
        slot.isbook=true;
        slot.save();
        const book_appointment=new Appointment_slot({
           studentId,professorId,slot:slotId
        });
        book_appointment.save();
        res.status(201).json({message:"Appontment is booked successfullt"});
    }catch(error){
        console.error(error);
        res,status(500).json({message:"Internal error"});
    }

    
}