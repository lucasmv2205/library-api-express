import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const api_key = process.env.MONGO_API_KEY
console.log(api_key);

mongoose.connect(`${api_key}`)

let db = mongoose.connection;

export default db