var express = require('express');
var router = express.Router();
var conn = require('../config/db')


/* Recuperar TODOS instrutores */
router.get('/', (req, res) => {
  resultado = {
    "status":"",
    "data":{}
  }

  conn.query("SELECT * FROM instrutores", (err, resp) => {
    if(err){
      resultado.status = "erro";
      resultado.data = err;
    }else{
      resultado.status = "OK";
      resultado.data = resp;
      res.send(resultado);
    }
  })
});

/* Recuperar instrutor por ID */
router.get('/:id', (req, res) => {
  resultado = {
    "status":"",
    "data":{}
  }

  conn.query("SELECT * FROM instrutores WHERE id = " + req.params.id, (err, resp) => {
    if(err){
      resultado.status = "erro";
      resultado.data = err;
    }else{
      resultado.status = "OK";
      resultado.data = resp;
      res.send(resultado);
    }
  })
});

/* Cadastrar NOVO instrutor */
router.post('/', (req, res) => {
  resultado = {
    "status":"",
    "data":{}
  }

  var nome     = req.body.nome;
  var conteudo = req.body.conteudo;

  conn.query("INSERT INTO instrutores (nome, conteudo) VALUES (? ,?)", [nome, conteudo], (err, resp) => {
    if(err){
      resultado.status = "erro";
      resultado.data = err;
    }else{
      resultado.status = "OK";
      resultado.data = resp;
      res.send(resultado);
    }
  })  
});

/* ATUALIZAR instrutor */
router.put('/:id', (req, res) => {
  resultado = {
    "status":"",
    "data":{}
  }

  var nome     = req.body.nome;
  var conteudo = req.body.conteudo;

  conn.query("UPDATE instrutores SET nome = ?, conteudo = ? WHERE id = ? ", [nome, conteudo, req.params.id], (err, resp) => {
    if(err){
      resultado.status = "Erro"
      resultado.data = err
      res.send(resultado)
    }else{
      resultado.status = "Ok"
      resultado.data = resp
      res.send(resultado)
    }
  })
})

/* DELETAR instrutor */
router.delete('/:id', (req, res) => {
  resultado = {
    "status":"",
    "data":{}
  }

  conn.query("DELETE FROM instrutores WHERE id = ?", [req.params.id], (err, resp) => {
    if(err){
      resultado.status = "Erro"
      resultado.data = err
      res.send(resultado)
    }else{
      resultado.status = "Ok"
      resultado.data = resp
      res.send(resultado)
    }
  })
})

module.exports = router;
