// Description: Generates an invoice.
const fs = require('fs');
const request = require('request');

const REST_HOST = 'localhost:8080'
const MACAROON_PATH = 'LND_DIR/data/chain/bitcoin/regtest/admin.macaroon'

let requestBody = {
  memo: <string>, // <string> 
  r_preimage: <string>, // <bytes> (base64 encoded)
  r_hash: <string>, // <bytes> (base64 encoded)
  value: <string>, // <int64> 
  value_msat: <string>, // <int64> 
  settled: <boolean>, // <bool> 
  creation_date: <string>, // <int64> 
  settle_date: <string>, // <int64> 
  payment_request: <string>, // <string> 
  description_hash: <string>, // <bytes> (base64 encoded)
  expiry: <string>, // <int64> 
  fallback_addr: <string>, // <string> 
  cltv_expiry: <string>, // <uint64> 
  route_hints: <array>, // <RouteHint> 
  private: <boolean>, // <bool> 
  add_index: <string>, // <uint64> 
  settle_index: <string>, // <uint64> 
  amt_paid: <string>, // <int64> 
  amt_paid_sat: <string>, // <int64> 
  amt_paid_msat: <string>, // <int64> 
  state: <string>, // <InvoiceState> 
  htlcs: <array>, // <InvoiceHTLC> 
  features: <object>, // <FeaturesEntry> 
  is_keysend: <boolean>, // <bool> 
  payment_addr: <string>, // <bytes> (base64 encoded)
  is_amp: <boolean>, // <bool> 
  amp_invoice_state: <object>, // <AmpInvoiceStateEntry> 
};
let options = {
  url: `https://${REST_HOST}/v1/invoices`,
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true,
  headers: {
    'Grpc-Metadata-macaroon': fs.readFileSync(MACAROON_PATH).toString('hex'),
  },
  form: JSON.stringify(requestBody),
}
request.post(options, function(error, response, body) {
  console.log(body);
});