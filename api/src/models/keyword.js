import db from '../db'

export function getKeyword() {
    return db.execute('SELECT * FROM `uc_docs`');
}

export function getKeywordByID(userName) {
    return db.execute('SELECT * FROM `uc_docs` WHERE `doc_username` = ?', [userName])
}
