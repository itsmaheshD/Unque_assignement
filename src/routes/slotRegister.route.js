import express from 'express';
import {addSlot,retriveSlots} from '../controllers/availability.controller';

const router=express.Router();
//Route for checking availability of slots
router.post('/',addSlot);
router.get('/:professorId',retriveSlots);
export default router;
