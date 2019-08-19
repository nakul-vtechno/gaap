import * as userModel from '../models/user';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 12;

export function getUser(req, res) {
    userModel.getUser().then(([rows]) => {
        res.status(201).json(rows)
    }).catch(err => {
        console.log(err)
    })
}

export function getUsers(req, res) {
    userModel.getUser().then(([rows]) => {
        res.status(201).json(rows)
    }).catch(err => {
        console.log(err)
    })
}

/* Singup methods */
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
        mobile: req.body.mobile,
        password: req.body.password,
        name: req.body.name,
    }
    userModel.checkUser(option.email).then(([users]) => {
        const user = users[0];
        if (user) {
            error.statusCode = 401;
            error.message = 'Email is already Exits';
            throw error;
        }
        return bcrypt.hash(option.password, saltRounds);
    }).then(hasPw => {
        option.password = hasPw;
        return userModel.singup(option);
    }).then(([user]) => {
        const loadedUser = user;
        const token = jwt.sign({
            email: option.email,
            userId: loadedUser.insertId.toString()
        }, 'birenderNakul@786', { expiresIn: '1h' });

        res.status(200).json({
            idToken: token,
            email: option.email,
            expiresIn: 3600 * 60,
            localId: loadedUser.insertId.toString()
        });

    }).catch(err => {
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

    userModel.checkUser(email)
        .then(([users]) => {
            const user = users[0];
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

