import express from 'express';
import { check } from 'express-validator';
import * as userControler from "../controllers/user";
const router = express.Router();

router.get('/',userControler.getUser);
// router.get('/:id', userControler.getUsers);

// User Singup...
router.put('/singup', [
    check('email', 'Email address is not correct').isEmail(),
    check('name', 'Name is Requried').not().isEmpty(),
    check('mobile', 'Mobile Number is not Correct').isMobilePhone().isNumeric().isLength({min:10}).isLength({max:10}),
    check('password', 'Minumum four character').isLength({ min: 4 })
], userControler.singup);

router.post('/login',[
    check('email').isEmail(),
],userControler.login);

export default router;