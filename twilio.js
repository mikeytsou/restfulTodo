const acountSid = process.env.TWILIO_SID;
      authToken = process.env.TWILIO_TOKEN;

const twilio = require("twilio");
      twilioClient = new twilio(acountSid, authToken);


app.get("/sms", function(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      if (req.xhr) {
        res.json(todos);
      }
    }
  })
})

app.post("/sms", function(req, res) {
  const post = {post: req.body.Body};
  Todo.create(post, function(err, newTodo) {
    if (err) {
      console.log(err);
    } else {
      if (req.xhr) {
        res.json(newTodo);
      }
    }
  });
});