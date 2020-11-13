import mongoose from 'mongoose';

const inventSchema = new mongoose.Schema({
    item_id: String,
    item: String,
    category: String,
    item_img: String,
    price: String,
    per: String,
    desc_intro: String,
    desc_nutr: String
});
inventSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('invent', inventSchema);



