import commentController from '../controller/commentController';
import { Router } from 'express';

const router = Router();

router.post('/comment', commentController.comment);
router.delete('/cancel', commentController.cancel);
router.get('/getallbybooking', commentController.getallbybooking);
router.get('/getallbyuser', commentController.getallbyuser);

export default router;