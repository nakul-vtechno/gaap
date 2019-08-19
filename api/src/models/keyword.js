import db from '../db'

export function getKeyword() {
    return db.execute('SELECT * FROM `uc_docs`');
}

export function getKeywordByID(userName) {
    return db.execute('SELECT * FROM `uc_docs` WHERE `doc_username` = ?', [userName])
}

export function deleteKeyword(id) {
    const timestamp = new Date().getTime();
    return db.execute("UPDATE uc_docs SET doc_username='xxxxxxxxx_docusername', doc_code='xxxxxxxx_doccode' WHERE id = ?", [id]);
}
