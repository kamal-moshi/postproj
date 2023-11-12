import mongoose from "mongoose";
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Types; 
const ProjectSchema = new Schema({
    ProjectName: {
        type: String,
        required: true,
        unique: true,
    },
    user: [{ type: ObjectId, ref: 'User' }]
});

export const Project = model("Project", ProjectSchema);
