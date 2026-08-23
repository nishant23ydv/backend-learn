import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async ()=>{
    try {
       const connectionIns = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`Mongo Db is Connected  to ${connectionIns.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectDb