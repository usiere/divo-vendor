import express from 'express';
const router = express.Router();
import * as controller from './nests-controller';
import * as auth from '../../services/auth-service';




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





router.get('/nest',  checkJwt, controller.index);
router.delete('/nest/:id',  checkJwt, controller.remove);

export default router;