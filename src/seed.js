const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const hashedPassword = await bcrypt.hash('test123', 10);

    await User.create({
        email: 'admin@example.com',
        password: hashedPassword,
    });

    console.log('Database seeded with admin user');
    process.exit();
});