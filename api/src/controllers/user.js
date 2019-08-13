import * as userModel from '../models/user'

export function getUser(req,res) {
    userModel.getUser().then(([rows]) => {
        res.status(201).json(rows)
    }).catch(err => {
        console.log(err)
    })
}

export function getUsers(req,res) {
    userModel.getUser().then(([rows]) => {
        res.status(201).json(rows)
    }).catch(err => {
        console.log(err)
    })
}

