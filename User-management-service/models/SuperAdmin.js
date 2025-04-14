// models/SuperAdmin.js
import mongoose from 'mongoose';
const SuperAdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);

export default SuperAdmin;
// This model defines the structure of the SuperAdmin document in the MongoDB database.
