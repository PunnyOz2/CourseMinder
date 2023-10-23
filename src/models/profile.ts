import { Schema, model, models } from 'mongoose';

const Profileschema = new Schema({
    ownerid: {
        type: String,
        required: true
    },
    profilename: {
        type: String,
        required: true
    },
    groups: {
        type: [String],
        required: true
    }
})
    
const Profile = models.Profile || model("Profile", Profileschema);

export default Profile;