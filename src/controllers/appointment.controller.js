import Appointment_slot from '../models/appointment.models.js';
import Slot_register from '../models/register_slot.models.js';

//controller to book professor appointment
export const bookAppointment=async (req,res)=>{
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
        res.status(500).json({message:"Internal error"});
    }

    
}
export const cancelAppointment=async(req,res)=>{
    try{
        const{appointmentId,professorId}=req.params;
        const appointment=await Appointment_slot.findById(appointmentId);
        if(!appointment){
            return res.staus(404).json({message:"Appointment Not Found"});
        }
        if(appointment.professorId.toString()!==professorId){
            return res.status(403);
        }
        const slot =await Slot_register.findById(appointment.slot);
        if(!slot){return res.status(4040);}
        slot.isbook=false;
        await slot.save();
        await Appointment_slot.findByIdAndDelete(appointmentId);
        res.status(200).json({message:"Appointment Cancelled"});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal Servere error"});
    }
}

