import db from '../db'

export function getUser() {
    return db.execute('SELECT * FROM `uc_users`');
}

export function getUsers() {
    return db.execute('SELECT * FROM `uc_users`');
}