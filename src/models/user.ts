import { Schema, model, models } from 'mongoose';

// const Profileschema = new Schema({
//     profilename: {
//         type: String,
//         required: true
//     },
//     groups: {
//         type: [String],
//         required: true
//     }
// })
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email address.'],
        unique: [true, 'Email address already exists.'],
    },
    username: {
        type: String,
        required: [true, 'Please provide a username.'],
        unique: [true, 'Username already exists.'],
    },
    image: {
        type: String,
    },
    colorScheme: {
        type: String,
        default: 'dark'
    }
})
    
const User = models.User || model("User", UserSchema);

export default User;