const express = require('express');
const router = express.Router();
const request = require('request');
const fs = require('fs');

const REST_HOST = 'localhost:8080';
const MACAROON_PATH = 'LND_DIR/data/chain/bitcoin/regtest/admin.macaroon';

router.post('/create-invoice', (req, res) => {
 let requestBody = {
memo,r_preimage,r_hash,
value,
value_msat ,
settled,
creation_date ,
settle_date,
payment_request,
description_hash, 
expiry,  
 fallback_addr,   
 cltv_expiry, 
 route_hints,
add_index, 
settle_index,
amt_paid,    
amt_paid_sat, 
amt_paid_msat, 
state,
htlcs,
features,   
is_keysend,  
payment_addr,  
is_amp,  
amp_invoice_state 
} = req.body;

 const options = {
    url: `https://${REST_HOST}/v1/invoices`,

    rejectUnauthorized: false,
    json: true,
    headers: {
      'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
    },
    form: JSON.stringify(requestBody),
  };
  request.post(options, function(error, response, body) {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while creating the invoice.');
    } else {
      console.log(body);
      res.send(body);
    }
  });
});

export { router as createinvoice };

