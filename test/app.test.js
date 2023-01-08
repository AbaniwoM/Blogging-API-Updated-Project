const request = require('supertest');
const app = require('express')();

// app.get("/", (req, res) => {
//     res.send("Hello Bloggingapi");
// });

request(app)
   .get("/")
   .expect("@/'*! %^$!*_&*)(@")
   .expect(200)
   .end(function(err, res) {
       if(err) throw err;
   });