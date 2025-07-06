import Slot_register from '../models/register_slot.models.js';
//controller to book professor appointment with given slot
export const addSlot = async (req, res) => {
  const { professorId, date, startTime, endTime } = req.body;
  const slot = new Slot_register({ professor: professorId, date, startTime, endTime });
  await slot.save();
  return res.json({ message: 'Slot added', slot });
};

//function to Check the slots available for a prfessor
//which in turn will return the slots which are not booked
export const retriveSlots = async (req, res) => {
  const { professorId } = req.params;
  const slot = await Slot_register.find({ professor: professorId, isbook: false });
  if (slot.length === 0) {
    return res.json({ message: "No slots" });
  }
 return  res.json({ slot });
};





