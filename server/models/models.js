const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING, unique: true, allowNull: false},
    group: {type: DataTypes.INTEGER, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
})

const Guard = sequelize.define('guard', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const TypeRole = sequelize.define('type_role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, allowNull: false},
})

const StudentGuard = sequelize.define('student_guard', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    roleNum: {type: DataTypes.INTEGER, allowNull: false}
})

Type.hasMany(Guard)
Guard.belongsTo(Type)

Role.hasMany(StudentGuard)
StudentGuard.belongsTo(Role)

Guard.hasMany(StudentGuard)
StudentGuard.belongsTo(Guard)

Student.hasMany(StudentGuard)
StudentGuard.belongsTo(Student)

// Student.belongsToMany(Guard, {through: StudentGuard})
// Guard.belongsToMany(Student, {through: StudentGuard})

Type.hasMany(TypeRole)
TypeRole.belongsTo(Type)

Role.hasMany(TypeRole)
TypeRole.belongsTo(Role)

// Type.belongsToMany(Role, {through: TypeRole})
// Role.belongsToMany(Type, {through: TypeRole})

module.exports = {
    Student,
    Guard,
    StudentGuard,
    Role,
    Type,
    TypeRole
}