import express from 'express';
const router = express.Router();
import * as controller from './invent-controller';


const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-xuvviu1o.auth0.com",
    audience: "http://localhost:8080"
  };

  
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


// usiere uncomment this and replace back
//router.post('/nest', checkJwt, controller.create);



router.get('/invent', controller.index);

router.post("/invent", checkJwt, controller.create);
router.post('/invent/:id',  checkJwt, controller.show);


//router.post("/invent", checkJwt, (req, res) => {
 // res.send({
   // msg: "Your access token was successfully validated!"
 // });
//});

export default router;