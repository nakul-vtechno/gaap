import sequelize from '../db/sequelize';
import { Sequelize } from 'sequelize';

const User = sequelize.define('uc_users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    display_name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    activation_token: {
        type: Sequelize.STRING(1000),
    },
    last_activation_request: {
        type: Sequelize.INTEGER(11),
    },
    lost_password_request: {
        type: Sequelize.INTEGER(11),
    },
    active: {
        type: Sequelize.BOOLEAN(1),
    },
    title: {
        type: Sequelize.STRING(500),
    },
    sign_up_stamp: {
        type: Sequelize.INTEGER(11),
    },
    last_sign_in_stamp: {
        type: Sequelize.INTEGER(11),
    },
    is_company: {
        type: Sequelize.BOOLEAN(1),
    },
    plan_type: {
        type: Sequelize.STRING(500),
    },
    bonus_active: {
        type: Sequelize.BOOLEAN(1),
    },
    bonus_count: {
        type: Sequelize.INTEGER(1),
    },
    is_unlimited: {
        type: Sequelize.BOOLEAN(1),
    },
    mobile_number: {
        type: Sequelize.BIGINT(10),
    },
    daily_count: {
        type: Sequelize.INTEGER(1),
    },
    monthly_count: {
        type: Sequelize.INTEGER(50),
    },
    buffer3: {
        type: Sequelize.INTEGER(1),
    },
    buffer4: {
        type: Sequelize.INTEGER(1),
    },
    buffer5: {
        type: Sequelize.INTEGER(1),
    }
})

export default User;


// var ts = Math.round((new Date()).getTime() / 1000);

// export function getUser() {
//     return sequelize.execute('SELECT * FROM `uc_users`');
// }

// export function getUsers() {
//     return sequelize.execute('SELECT * FROM `uc_users`');
// }

// export function checkUser(email) {
//     return sequelize.query('SELECT * FROM `uc_users` WHERE `email` = ?',[email])
// }

// export function singup(option) {
//     const sql = `INSERT INTO uc_users (
//         id,
//         user_name,
//         display_name,
//         password,
//         email,
//         activation_token,
//         last_activation_request,
//         lost_password_request,
//         active,
//         title,
//         sign_up_stamp,
//         last_sign_in_stamp,
//         is_company,
//         plan_type,
//         bonus_active,
//         bonus_count,
//         is_unlimited,
//         mobile_number,
//         daily_count,
//         monthly_count,
//         buffer3,
//         buffer4,
//         buffer5) VALUES ?`;
//     const values = [
//         [
//             '',
//             option.email,
//             option.name,
//             option.password,
//             option.email,
//             '0',
//             '0',
//             '0',
//             '1',
//             'Dear',
//             ts,
//             ts,
//             '0',
//             'g1',
//             '0',
//             '0',
//             '0',
//             option.mobile,
//             '0',
//             '0',
//             '0',
//             '0',
//             '0'
//         ]
//     ]

//     return sequelize.query(sql, [values]);

// }
