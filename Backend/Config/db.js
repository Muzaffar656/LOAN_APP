// Connect to MongoDB
const mongoose = require('mongoose')

const MongoConnect =async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Mongo Connect')
    } catch (error) {
        console.log(error)
    }
}

module.exports = MongoConnect