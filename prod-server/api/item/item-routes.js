'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _itemController = require('./item-controller');

var controller = _interopRequireWildcard(_itemController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var multer = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');

var jwt = require("express-jwt");
var jwksRsa = require("jwks-rsa");

var authConfig = {
  domain: "dev-xuvviu1o.auth0.com",
  audience: "http://localhost:8080"
};

// aws s3 multer configure
aws.config.setPromisesDependency();
aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_KEY,
  accessKeyId: process.env.S3_ACCESS_SECRET,
  region: 'ap-southeast-1'
});

var s3 = new aws.S3();

// multer upload
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'divoitemsupd',
    key: function key(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
var checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://' + authConfig.domain + '/.well-known/jwks.json'
  }),

  audience: authConfig.audience,
  issuer: 'https://' + authConfig.domain + '/',
  algorithm: ["RS256"]
});

router.post('/item', checkJwt, upload.any(), controller.create);

exports.default = router;

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