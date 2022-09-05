import mongose from 'mongoose'

const autorSchema = new mongose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String},
  },
  {
    versionKey: false
  }
)

const autores = mongose.model('autores', autorSchema)

export default autores