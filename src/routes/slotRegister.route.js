import express from 'express';
import {addSlot,retriveSlots} from "../controllers/availability.controller.js";

const router=express.Router();
//Route for checking availability of slots
router.post('/',addSlot);

//Route for retrieving slots available for a professor
//Uses the retriveSlots function from controller/availabilty.controller.js file
//will return unbooked slots
router.get('/:professorId',retriveSlots);
export default router;
