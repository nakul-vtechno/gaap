import express from 'express';
import * as userControler from "../controllers/user";
const router = express.Router();

router.get('/',userControler.getUser);
router.get('/:id', userControler.getUsers);


export default router;