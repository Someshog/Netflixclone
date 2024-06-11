const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {

  console.log("ssds");

})
// Handle form submission
app.post('/sign-in', (req, res) => {
  res.send(`This is an example to show the post request of an entered email: ${req.body.inputdata}`);
  
});


// app.get('/otherPage', (req, res) => {
//   res.send(`Received data`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})