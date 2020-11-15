
import express from 'express';
const router = express.Router();
import * as controller from './item-controller';
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-xuvviu1o.auth0.com",
    audience: "http://localhost:8080"
  };

  const upload = multer({ storage: storage });

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION

    
  });
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: image.originalname,
    Body: file,
    ContentType: image.mimetype,
    ACL: 'public-read'
  };

  s3bucket.upload(params, async (err, data) => {
    try {
      if (err) {
        res.status(500).json({ error: true, Message: err });
       } else {
         const newFileUploaded = {
           description: info.description,
           fileLink: s3FileURL + image.originalname,
           s3_key: params.Key
          };
      info = { ...info, photo: newFileUploaded.fileLink };
      const photos = await database.addPhoto(db, info);
      res.send(photos);
     }
    } catch (err) {
     res.status(500).json({ msg: 'Server Error', error: err });
    }
  });




  // Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
  });



  router.post('/item',  checkJwt, upload.fields([{name: 'img1', maxcount: 1},
  {name: 'img2', maxcount: 1},
  {name: 'img3', maxcount: 1}
]) , controller.create);




export default router;



















// import express from 'express';
// const router = express.Router();
// import * as controller from './item-controller';
// const multer = require('multer');
// const aws = require('aws-sdk'),
// const multerS3 = require('multer-s3');



// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

// // aws s3 multer configure
// aws.config.update({
//     secretAccessKey: process.env.S3_ACCESS_KEY,
//     accessKeyId: process.env.S3_ACCESS_SECRET,
//     region: 'us-east-1'
// });

// s3 = new aws.S3()

// const authConfig = {
//     domain: "dev-xuvviu1o.auth0.com",
//     audience: "http://localhost:8080"
//   };

//   // multer upload
//   const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'divoitemsupd',
//         key: function (req, file, cb) {
//             console.log(file);
//             cb(null, file.originalname); //use Date.now() for unique file keys
//         }
//     })
// });




  
//   // Define middleware that validates incoming bearer tokens
// // using JWKS from dev-xuvviu1o.auth0.com
// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//     }),
  
//     audience: authConfig.audience,
//     issuer: `https://${authConfig.domain}/`,
//     algorithm: ["RS256"]
//   });



//   // router.post('/item',  checkJwt, controller.create);
//   router.post('/item',  checkJwt, upload.any(), controller.upd);


// export default router;

































// // import express from 'express';
// // const router = express.Router();
// // import * as controller from './item-controller';
// // const multer = require('multer')
// // const aws = require('aws-sdk'),
// // const multerS3 = require('multer-s3');
// // const bodyParser = require('body-parser'), //not sure it should be here



// // // aws s3 multer configure
// // aws.config.update({
// //     secretAccessKey: process.env.S3_ACCESS_KEY,
// //     accessKeyId: process.env.S3_ACCESS_SECRET,
// //     region: 'us-east-1'
// // });

// // s3 = new aws.S3();

// // const jwt = require("express-jwt");
// // const jwksRsa = require("jwks-rsa");

// // const authConfig = {
// //     domain: "dev-xuvviu1o.auth0.com",
// //     audience: "http://localhost:8080"
// //   };


// // // const multer = require('multer')
// // // const upload = multer({dest: 'uploads/'})




// //   // multer upload
// //   const upload = multer({
// //     storage: multerS3({
// //         s3: s3,
// //         bucket: 'divoitemsupd',
// //         key: function (req, file, cb) {
// //             console.log(file);
// //             cb(null, file.originalname); //use Date.now() for unique file keys
// //         }
// //     })
// // });

  
// //   // Define middleware that validates incoming bearer tokens
// // // using JWKS from dev-xuvviu1o.auth0.com
// // const checkJwt = jwt({
// //     secret: jwksRsa.expressJwtSecret({
// //       cache: true,
// //       rateLimit: true,
// //       jwksRequestsPerMinute: 5,
// //       jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
// //     }),
  
// //     audience: authConfig.audience,
// //     issuer: `https://${authConfig.domain}/`,
// //     algorithm: ["RS256"]
// //   });



// //   router.post('/item',  checkJwt, controller.create);
// //   router.post('/formupd',  checkJwt, upload.any(), controller.upd);




// // export default router;