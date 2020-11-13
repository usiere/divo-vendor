import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    
    item_id:String,
    item: String,
    category: String,
    item_img: String,
    price: String,
    per: String,
    desc_intro: String,
   deli_time : String, 
    deli_addy: String,
    qty: Number,
    date: String,
    inputer: String,
    delivered: {type: Boolean, default: false },
   
});
orderSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('order', orderSchema);



