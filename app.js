require('dotenv').config();
const express = require('express');
//const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({limit: '1000mb'}));
app.use(express.urlencoded({extended: false, limit: '1000mb'}));//try now done 
// bodyParser = {
//     json: {limit: '500mb', extended: true},
//     urlencoded: {limit: '500mb', extended: true}
//   };


const port = process.env.PORT || 5000; //can you solve this problem
//const deliveryRouter = require("./api/delivery/delivery.router");
const usersRouter = require("./api/users/users.router");
const adminRouter = require("./api/admin/admin.router");
//app.use("/api/delivery",deliveryRouter);
app.use("/api/users",usersRouter);
app.use("/api/admin",adminRouter);
//app.use(bodyParser.json({limit: '10mb', extended: true}));
//you can do it with express so you didnt need to use body parser ok?
// oh my god why you have port problem?,
  //come to anydek.
 // images too large
app.listen(port,()=>{
    console.log("server up and running on port ",port);
}) 