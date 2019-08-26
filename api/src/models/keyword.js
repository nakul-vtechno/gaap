import sequelize from '../db/sequelize';
import { Sequelize } from 'sequelize';

const keyModel = sequelize.define('uc_users', {
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

export default keyModel;
