const mongoose = require("mongoose")

const connectDb=()=>{
    return mongoose.connect(process.env.mongo_URL)
}

module.exports={connectDb}