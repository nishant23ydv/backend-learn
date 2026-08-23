// require('dotenv').config({path: './env'})
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/db.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})



connectDb()








// import express from 'express'
// const app = express()

// (async ()=> {
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("error", ()=> {
//         console.log("Error: ", error)
//         throw error
//        })
//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listenign on Port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// })()