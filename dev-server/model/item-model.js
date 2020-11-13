import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    
    img_upd1: String,
    img_upd2: String,
    img_upd3: String,
    item_name: String,
    item_price: String,
    item_size: String,
    item_stock: String,
    item_process: String,
    item_desc: String,
    user:  String,
   

});
itemSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('item', itemSchema);




