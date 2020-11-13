import mongoose from 'mongoose';

const recurSchema = new mongoose.Schema({
    category: String,
    itempic: String,
    type: String,
    item: String,
    price1: String,
    price2: String,
    size : String, /* should be an array */
    per: String,
     /* specific to recur */
   deli_time_weekly : String, 
   deli_time_custom1 : String,
   deli_time_custom2: String,
   deli_time_custom3: String,
   deli_time_custom4: String,
   deli_addy1: String,
   deli_addy_custom: String,
   qty: Number,
   inputer: String,
    Date: { type: Date, default: Date.now }, //Date added
});
recurSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('recur', recurSchema);



