
import Cat from '../../model/cat-model';
import moment from 'moment';



export function create(req, res) {
 console.log(req.body)
         const cat = new Cat({            
             name : req.body.cat_name,
             field : req.body.cat_field,
             desc: req.body.cat_desc,
             address: req.body.cat_address,
             phone: req.body.cat_phone,
             user:  req.body.user,
             date : moment().format("MMM Do YY")

         });           

        cat.save(error => {
            if (error) {
                return console.log(error);
              
            }
            return res.status(201).json({ cat: cat });
    })
}


export function index(req, res) {
    // FIND ALL NECESSITIES
    Cat.find({}, (error, cats) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ cats: cats });
       
    })
 
}


// deleting category

export function remove(req, res) {
    Cat.findOne({ _id: req.params.id }, (error, cat) => {
        if (error) {
            return res.status(500).json();
        }
        if (!cat) {
            return res.status(404).json();
        }
       
       Cat.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}
