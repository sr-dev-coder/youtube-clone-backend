import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})





connectDB();


/*
import express from "express";
const app = express();
(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        app.on("errror", (error)=>{
            console.log('ERRROR', error)
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(err){
        console.error('ERROR:', error)
    }
})()
*/