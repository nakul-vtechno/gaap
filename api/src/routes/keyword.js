import express from 'express';
import isAuth from '../middleware/is-auth';
import * as keyControler from '../controllers/keyword';

const router = express.Router();
router.get('',isAuth,keyControler.getKeyword);

export default router;
