const port = process.env.PORT || 142; // this can be very useful if you deploy to Heroku!
const app = require('./server')
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});