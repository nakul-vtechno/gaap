// import * as userModel from '../models/user';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user'

const saltRounds = 12;

export function getUser(req, res) {
    User.findAll().then(user => {
        res.status(200).json(user);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })
}

// export function getUser(req, res) {
//     userModel.getUser().then(([rows]) => {
//         res.status(201).json(rows)
//     }).catch(err => {
//         console.log(err)
//     })
// }

// export function getUsers(req, res) {
//     userModel.getUser().then(([rows]) => {
//         res.status(201).json(rows)
//     }).catch(err => {
//         console.log(err)
//     })
// }


export function singup(req, res) {
    const error = new Error();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        error.statusCode = 422;
        error.serverError = errors.array();
        throw error;
    }
    const option = {
        email: req.body.email,
        mobile_number: req.body.mobile,
        password: req.body.password,
        user_name: req.body.name,
    }
    User.findOne({ where: { email: option.email } })
        .then(user => {
            console.log("User : ", user);
            if (user) {
                error.statusCode = 401;
                error.message = 'Email is already Exits';
                throw error;
            }
            return bcrypt.hash(option.password, saltRounds);
        })
        .then(hasPw => {
            option.password = hasPw;
            return User.create(
                {
                    user_name: option.email,
                    display_name: 'birender',
                    password: option.password,
                    email: option.email,
                    mobile_number: option.mobile_number
                }
            )
        })
        .then((user) => {
            const insertId = user.get('id');
            const insertEmail = user.get('email')
            const token = jwt.sign({
                email: option.email,
                userId: insertId.toString()
            }, 'birenderNakul@786', { expiresIn: '1h' });

            res.status(201).json({
                idToken: token,
                email: insertEmail,
                expiresIn: 3600 * 60,
                localId: insertId.toString()
            });

        }).catch(err => {
            console.log('Error===============> : ', err);
            return res.status(err.statusCode || 500).json({ error: err });
        });
}

// login Methods..
export function login(req, res) {
    const error = new Error();
    const err = validationResult(req);
    if (!err.isEmpty()) {
        error.statusCode = 422;
        error.validationError = err.array();
        throw error
    }
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({ where: { email: email } })
        .then((user) => {
            if (!user) {
                error.statusCode = 401;
                error.message = 'A user with this email could not be found.'
                return res.status(401).json({ error: error });
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        }).then(isEqual => {
            if (!isEqual) {
                error.statusCode = 401;
                error.message = 'Wrong Password';
                throw error;
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser.id.toString()
            }, 'birenderNakul@786', { expiresIn: '1h' });

            res.status(200).json({
                idToken: token,
                email: loadedUser.email,
                expiresIn: 3600 * 60,
                localId: loadedUser.id.toString()
            });
        })
        .catch(err => {
            return res.status(err.statusCode || 500).json({ error: err });
        });
}

