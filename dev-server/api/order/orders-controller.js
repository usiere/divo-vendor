
import Order from '../../model/order-model';
import Cout from '../../model/cout-model';
import Nest from '../../model/nest-model';
import moment from 'moment';





export function show(req, res) {
    // FIND ALL NECESSITIES
    Order.find({}, (error, orders) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ orders: orders });
       
    })
 
}



export function create(req, res) {
    // GET NECESSITY BY ID
    Nest.findOne({ _id: req.body.itemid}, (error, order_new ) => {
        if (error) {
            return res.status(505).json();
        }
        if (!order_new) {
            return res.status(404).json();
        }
        
        const orderobj = order_new.toObject();

         const order = new Order({            
             category: orderobj.category,
             item: orderobj.item,
             divo_id: orderobj.divo_id,
             item_img: orderobj.item_img,
             price: orderobj.price,
             range: orderobj.range,
             per: orderobj.per,
             deli_time : req.body.deli_time,
             deli_addy : req.body.deli_addy,
             desc: orderobj.desc,
             inputer:  req.body.user,
             qty: req.body.qty,
             date : moment().format("MMM Do YY")
     

         });           

        order.save(error => {
            if (error) {
                return console.log(error);
              
            }
            return res.status(201).json();
    })
     
        }).select("-_id");

        
       
}

export function remove(req, res) {
    Order.findOne({ _id: req.params.id }, (error, order) => {
        if (error) {
            return res.status(500).json();
        }
        if (!order) {
            return res.status(404).json();
        }
       
       Order.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}


// Checkout

export  function cout(req, res) {
    Order.find({ inputer: req.params.id }, (error, cout_new) => {
        if (error) {
            return res.status(500).json();
        }
        if (!cout_new) {
            return res.status(404).json();
        }

        
     
         cout_new.forEach(cout_each => {
           console.log('check ip'+cout_each);
           
           const coutobj =  cout_each.toObject();
           const cout = new Cout({            
            category: coutobj.category,
            item: coutobj.item,
            divo_id: coutobj.divo_id,
            item_img: coutobj.item_img,
            price: coutobj.price,
            range: coutobj.range,
            per: coutobj.per,
            deli_time : coutobj.deli_time,
            deli_addy : coutobj.deli_addy,
            desc: coutobj.desc,
            inputer:  coutobj.inputer,
            qty: coutobj.qty,
            date : coutobj.date
        });    
        
      

       cout.save(error => {
           if (error) {
               return console.log(error);
             
           }
        
   })

        })
   
        Order.deleteMany({ inputer: req.params.id }, error => {
            if (error) {
                return res.status(505).json();
            }
            return res.status(204).json();
        });
        

    });

 
}
