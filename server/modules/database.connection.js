const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/kochab_tasks';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('Error connecting to mongo:', error);
});