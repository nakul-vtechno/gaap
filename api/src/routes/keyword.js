import express from 'express';
import * as keyControler from '../controllers/keyword';

const router = express.Router();
router.get('/',keyControler.getKeyword);
router.get('/:userName',keyControler.getKeywordByID);
router.delete('/:id',keyControler.getKeywordByID);

export default router;
