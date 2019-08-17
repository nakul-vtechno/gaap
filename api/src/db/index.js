import mysql from 'mysql2'

const pool = mysql.createConnection({
    host: 'mysql.thinkterns.com',
    user: 'gaap_db_user',
    password: 'Safest1!',
    database: 'db_gaap',
})

export default pool.promise();