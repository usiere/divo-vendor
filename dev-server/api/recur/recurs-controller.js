
import Recur from '../../model/recur-model';
import Nest from '../../model/nest-model';
import moment from 'moment';




export function create(req, res) {
    // GET NECESSITY BY ID
    Nest.findOne({ _id: req.body.itemid}, (error, recur_new) => {
        if (error) {
            return res.status(505).json();
        }
        if (!recur_new) {
            return res.status(404).json();
        }


        const recurobj = recur_new.toObject();

         const recur = new Recur({



            deli_time_weekly : req.body.deli_time_weekly, 
            deli_time_custom1 : req.body. deli_time_custom1,
            deli_time_custom2: req.body.deli_time_custom2,
            deli_time_custom3: req.body.deli_time_custom3,
            deli_time_custom4: req.body.deli_time_custom4,
            deli_addy1: req.body.deli_addy1,
            deli_addy_custom: req.body.deli_addy_custom,
            qty: req.body. qty,
             category: recurobj.category,
             itempic: recurobj.itempic,
             type: recurobj.type,
             item: recurobj.item,
             price: recurobj.price,
             size : recurobj.size,
             per: recurobj.per,
         });           
        console.log(recur)

         recur.save(error => {
            if (error) {
                return console.log(error);
              
            }
            return res.status(201).json();
    })
     
        }).select("-_id");

        
       
}


      

    