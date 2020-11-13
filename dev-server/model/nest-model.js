import mongoose from 'mongoose';


const nestSchema = new mongoose.Schema({
    item_id: String,
    category: String,
    item: String,
    item_img: String,
    price: String, 
    per: String,
    inputer: String,
    desc_intro:String,
    added: String,
    ordered: { type: Boolean, default: false },
    recurred: { type: Boolean, default: false }
});
nestSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('nest', nestSchema);


