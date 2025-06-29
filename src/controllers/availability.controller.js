import Slot_register from '../models/register_slot.models.js';

export const addSlot = async (req, res) => {
  const { professorId, date, startTime, endTime } = req.body;
  const slot = new Slot_register({ professorId, date, startTime, endTime });
  await slot.save();
  res.json({ message: 'Slot added', slot });
};
export const retriveSlots=async(req,res)=>{
  const {professorId}=req.params;
  const slot=await Slot_register.find({professorId,isbook:false});
  if(slot.length===0){
    return res.json({message:"No slots"});
  }
  res.json({slot});
}