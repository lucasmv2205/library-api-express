import autores from '../models/Autor.js'

class AutorController{
  
  static listarAutores = (req, res) => {
    autores.find((err, livros) => {
      res.status(200).json(livros)
    })
  }

  static listarPorId = (req, res) => {
    const { id } = req.params
    autores.findById(id, (err, livros) => {
      if(err){
        res.status(400).send({message: `${err.message} - erro ao listar autor`})
      }else{
        res.status(200).send(livros)
      }
    })
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
      }else{
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const { id } = req.params

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: 'autor atualizado com sucesso'})
      }else{
        res.status(500).send({message: `${err.message} - falha ao atualizar autor`})
      }
    })
  }

  static deletarAutor = (req, res) => {
    const { id } = req.params
    autores.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'autor deletado com sucesso'})
      }else{
        res.status(500).send({message: `${err.message} - nao foi possivel deletar o autor`})
      }
    })
  }
}

export default AutorController