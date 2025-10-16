import mongoose from 'mongoose'

const Schema= mongoose.Schema;

const User= new Schema({
    username:{
        type: String,
        required: true,
        trim: true,

    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
})

const UserModel= mongoose.model('Users', User);

export default UserModel;