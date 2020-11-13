
import Item from '../../model/item-model';
import moment from 'moment';

// const upload = require("../../services/image-upload");
// const singleUpload = upload.single("image");

export function show(req, res) {
  // console.log(req)
 
}
// Primarily for the vuex aspect
export function create(req, res) {
  console.log(req.body)
          const item = new Item({            
            img_upd1: req.body.img_upd1,
            img_upd2: req.body.img_upd2,
            img_upd3: req.body.img_upd3,
            item_name: req.body.item_name,
            item_price: req.body.item_price,
            item_size: req.body.item_size,
            item_stock: req.body.item_stock,
            item_process: req.body.item_process,
            item_desc: req.body.item_desc,
              user:  req.body.user,
              date : moment().format("MMM Do YY")
 
          });           
       


         item.save(error => {
             if (error) {
                 return console.log(error);
               
             }
             return res.status(201).json({ item: item });
     })
 }
 

 export function upd(req, res) {
  console.log(req.files)
  console.log(req.body)  

  

 }
 



   // singleUpload(req, res, function (err) {
  //   if (err) {
  //     return res.json({
  //       success: false,
  //       errors: {
  //         title: "Image Upload Error",
  //         detail: err.message,
  //         error: err,
  //       },
  //     });
  //   }

  // let update = { profilePicture: req.file.location };

  //  console.log(req)
  // });
