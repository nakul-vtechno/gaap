import db from '../db'

export function getKeyword() {
    return db.execute('SELECT * FROM `uc_users`');
}
