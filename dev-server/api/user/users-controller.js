
import User from '../../model/user-model';
import moment from 'moment';




export function create(req, res) {
        const user = new User(req.body);
            console.log(user)
       // invent.buyer = user.email;
       user.Date = moment(user.dueDate);
      
        user.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    }

    export function show(req, res) {
        // GET NECESSITY BY ID
        User.findOne({ email: req.params.id}, (error, user_main) => {
            if (error) {
                return res.status(505).json();
            }
            if (!user_main) {
                return res.status(200).json({ user_main: 'none' });

            }
            return res.status(200).json({ user_main: user_main });
            
        })
        
    }
             

            


   
      

    