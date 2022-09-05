import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://lucas:123@livros.5d1f4nk.mongodb.net")

let db = mongoose.connection;

export default db