import express from 'express';
import { check } from 'express-validator';
import * as authControler from '../controllers/auth';

const router = express.Router();

router.put('/singup', [
    check('email', 'Email address is not correct').isEmail(),
    check('name', 'Name is Requried').not().isEmpty(),
    check('mobile', 'Mobile Number is not Correct').isMobilePhone().isNumeric().isLength({min:10}).isLength({max:10}),
    check('password', 'Minumum four character').isLength({ min: 4 })
], authControler.singup);

export default router;
