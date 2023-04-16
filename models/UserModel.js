//1. Import mongoose
const { Title } = require('@mui/icons-material');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true   
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    
   
});

//3 creat the moddel
const UserModel  = mongoose.model('users', UserSchema);

//4 export the model
module.exports = UserModel;