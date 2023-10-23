import { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
    ownerid: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    coursename: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    startdate: {
        type: Date,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
    },
    group_tags: {
        type: [String],
    },
    days: {
        type: [Boolean],
        required: true
    }
})
    
const Course = models.Course || model("Course", CourseSchema);

export default Course;