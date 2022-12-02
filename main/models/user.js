const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.SMALLINT,
                allowNull: false,
                primaryKey: true
            },
            password: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            nickname: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Review, { foreignKey: 'userId', sourceKey: 'id' });
        db.User.hasMany(db.Order, { foreignKey: 'userId', sourceKey: 'id' });
        db.User.hasMany(db.Inquiry, { foreignKey: 'userId', sourceKey: 'id' });
        db.User.hasMany(db.Pick, { foreignKey: 'userId', sourceKey: 'id' });
        db.User.hasOne(db.Coupon, { foreignKey: 'userId', sourceKey: 'id' });
    }
};
