
import Cout from '../../model/cout-model';


export function show(req, res) {
    // FIND ALL PAST ORDERS
    Cout.find({}, (error, couts) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ couts: couts });
       
    })
 
}



