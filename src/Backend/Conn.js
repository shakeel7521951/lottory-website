const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Lottery_office', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
