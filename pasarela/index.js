const stripe = require('stripe')('sk_test_51P8akCRsR5dIzofuSX92EdF77i9U66Hcl0Cl0YVwBtWMxuLIjRfpJAO56xygK68s6nOxehvzPB3V6AyIkBPJJ7ko00xVIIIg6i');
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001
 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
//app.get('/hola' , (req, res)=>{
  //  res.send('hola mundo')
//})

app.post('/payment-sheet', async (req, res) => {

  try {

  
  const monto = req.body.monto

  
  console.log('funcioonando');

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2024-04-10'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100 * Number(monto),
    currency: 'mxn',
    customer: customer.id,
    // In the latest version of the API, specifying the automatic_payment_methods parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51P8akCRsR5dIzofuqhdwIcJg60W8pxAEt3mhSleFHD93w6YuD7Jx9djoR7m3YFId98E1seyzv2BQfTUBIASmbjtp006kXQCXIk'


});
} catch (err) {
    console.log(err);
}
});


app.get("/", (req, res)=> {
  res.send("Funcionansihdskhdksddo")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})