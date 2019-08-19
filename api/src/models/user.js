import db from '../db';

var ts = Math.round((new Date()).getTime() / 1000);

export function getUser() {
    return db.execute('SELECT * FROM `uc_users`');
}

export function getUsers() {
    return db.execute('SELECT * FROM `uc_users`');
}

export function checkUser(email) {
    return db.query('SELECT * FROM `uc_users` WHERE `email` = ?',[email])
}

export function singup(option) {
    const sql = `INSERT INTO uc_users (
        id,
        user_name,
        display_name,
        password,
        email,
        activation_token,
        last_activation_request,
        lost_password_request,
        active,
        title,
        sign_up_stamp,
        last_sign_in_stamp,
        is_company,
        plan_type,
        bonus_active,
        bonus_count,
        is_unlimited,
        mobile_number,
        daily_count,
        monthly_count,
        buffer3,
        buffer4,
        buffer5) VALUES ?`;
    const values = [
        [
            '',
            option.email,
            option.name,
            option.password,
            option.email,
            '0',
            '0',
            '0',
            '1',
            'Dear',
            ts,
            ts,
            '0',
            'g1',
            '0',
            '0',
            '0',
            option.mobile,
            '0',
            '0',
            '0',
            '0',
            '0'
        ]
    ]

    return db.query(sql, [values]);

}