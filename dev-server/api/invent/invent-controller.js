import Invent from '../../model/invent-model';
import Nest from '../../model/nest-model.js';
import moment from 'moment';

export function index(req, res) {
    // FIND ALL NECESSITIES
    Invent.find({}, (error, invents) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ invents: invents });
       
    })
 
}




export function create(req, res) {
    console.log('How are you');
    console.log(req.body.invent);
        const invent = new Invent(req.body.invent);

       // invent.buyer = user.email;
        invent.added = moment(invent.added.format("MMM Do YY"));	
      
        invent.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    }



   
      

    export function show(req, res) {
        // GET NECESSITY BY ID
        Invent.findOne({ _id: req.params.id}, (error, nest_new) => {
            if (error) {
                return res.status(505).json();
            }
            if (!nest_new) {
                return res.status(404).json();
            }

            

             console.log(nest_new)          
            
            
           
             console.log(nest_new)  


            const nestobj = nest_new.toObject();
            const user = req.body.user;
            console.log (user)

            
             const nest = new Nest({
                 category : nestobj.category,
                 divo_id : nestobj.divo_id,
                 item : nestobj.item,
                 per : nestobj.per,
                 price : nestobj.price,
                 range : nestobj.range,
                 desc: nestobj.desc,
                 item_img: nestobj.item_img,
                 inputer: user,
                 added : moment().format("MMM Do YY")
     
             });    

    
          
         console.log('check this'+ nest)

             nest.save(error => {
                if (error) {
                    return console.log(error);
                  
                }
                return res.status(201).json();
        })
         
            }).select("-_id");

            
           
    }

