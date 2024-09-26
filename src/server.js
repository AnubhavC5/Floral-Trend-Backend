const { app } = require(".");
const { connectDb } = require("./config/db");
const userService=require("./services/user.service.js")

app.listen(process.env.PORT,async ()=>{
    await connectDb()
    userService.initializeAdminUser()
    console.log("ecommerce api listing on port ",process.env.PORT)
})