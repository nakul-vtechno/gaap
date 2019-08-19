import * as userModel from '../models/user';
import { validationResult }  from 'express-validator';

/* Singup methods */
export function singup(req,res,next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

    const option = {
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        name: req.body.name,
    }
    userModel.singup(option).then((resp) => {
        res.status(201).json({
            data: 'Register New user'
        })
    }).catch(error => console.log(error));
}

export function checkUser(req,res) {
    return userModel.checkUser(email)
    .then((resp) => {
        console.log('Resp :: ',resp);
        // if ()
    })
}