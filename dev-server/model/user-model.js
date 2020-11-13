import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    divoid: String,
    email: String,
    name: String,
    address: String,
    district: String,
    city: String,
    phone1: String,
    phone2: String,
    Date: { type: Date, default: Date.now }, //Date added
});
userSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('user', userSchema);

