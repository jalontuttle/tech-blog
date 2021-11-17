const { User } = require('../models');
const userData = [
    {
        user_name: 'JoeTest',
        email: 'Joe@gmail.com',
        password: 'password123'
    },
    {
        user_name: 'BrianTest',
        email: 'Brian@yahoo.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;