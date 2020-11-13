
import Nest from '../../model/nest-model.js';
import moment from 'moment';

export function index(req, res) {
    // FIND ALL NECESSITIES
    Nest.find({}, (error, nests) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ nests: nests });
       
    })
 
}


export function remove(req, res) {
    Nest.findOne({ _id: req.params.id }, (error, nest) => {
        if (error) {
            return res.status(500).json();
        }
        if (!nest) {
            return res.status(404).json();
        }
       
       Nest.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}



