import express from 'express';
const router = express.Router();
import * as controller from './cat-controller';


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



  router.post('/cat',  checkJwt, controller.create);
  router.get('/cat',  checkJwt, controller.index);
  router.delete('/cat/:id',  checkJwt, controller.remove);



export default router;