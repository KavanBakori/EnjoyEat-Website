const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    surname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
        unique: true,

    },
    birth: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    region: {
        type: String,
        require: true,
    },
    postal: {
        type: Number,
        require: true,
    },
   
});

const authuserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
});


const restaurantSchema = new Schema({
    resname: {
        type: String,
        require: true,
    },
    tagline: {
        type: String,
        require: true,
    },
    ownername: {
        type: String,
        require: true,
    },
    owneremail: {
        type: String,
        require: true,
        unique: true,
    },
    ownercontact: {
        type: String,
        require: true,
        unique: true,
    },
    opentime: {
        type: String,
        require: true,
    },
    closetime: {
        type: String,
        require: true,
    },
    rescontact: {
        type: Number,
        require: true,
    },
    reswebsite: {
        type: String,
        require: true,
    },
    resaddress: {
        type: String,
        require: true,
    },
    resstate: {
        type: String,
        require: true,
    },
    rescity: {
        type: String,
        require: true,
    },
    respin: {
        type: Number,
        require: true,
    },
    totalpersons: {
        type: Number,
        require: true,
    },
    availableseats: {
        type: Number,
    },
    food: [String],

    describe: {
        type: String,
        require: true,
    }
});

const requestSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    call: {
        type: Number,
    },
    persons: {
        type: Number,
    },
    Restaurantname: { 
        type: String,
    },
   
});


const historySchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    call: {
        type: Number,
    },
    persons: {
        type: Number,
    },
    Restaurantname: { 
        type: String,
    },
   
});


// Export the User and Authuser models
module.exports = {
    User: mongoose.model('User', userSchema),
    Authuser: mongoose.model('Authuser', authuserSchema),
    Restaurant: mongoose.model('Restaurant', restaurantSchema),
    Requests: mongoose.model('Requests', requestSchema),
    History: mongoose.model('History', historySchema),
    connectToDatabase: async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/kavan', {

            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    },
};
