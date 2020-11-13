import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
    
    cat_id:String,
    name: String,
    desc: String,
    field: String,
    addy: String,
    phone: String,
    user: String,
    Date: { type: Date, default: Date.now }, //Date added
});
catSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('cat', catSchema);




