const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const MongoConnect = require('./Config/db')
MongoConnect()
const errorMiddelware = require('./middelware/error')
const loan = require('./Route/LoanRoute')
const user = require('./Route/UserRoute')
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());



app.use('/api/',user)
app.use('/api/',loan)





app.get('/',(req,res)=>{
    res.json({
        message:"SuccesFully Run"
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(errorMiddelware)
