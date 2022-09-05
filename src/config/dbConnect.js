import mongoose from 'mongoose'

mongoose.connect(`${process.env.MONGO_API_KEY}`)

let db = mongoose.connection;

export default db