const mongoose = require("mongoose")

const mongo_URL='mongodb+srv://anubhav5:Anubhav123@cluster0.iqgyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongo_URL)
}

module.exports={connectDb}