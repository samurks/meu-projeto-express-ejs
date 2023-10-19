const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome:"", preco:"", descricao:"", imagem:""},
  {id: 2, nome:"", preco:"", descricao:"", imagem:""},
  {id: 3, nome:"", preco:"", descricao:"", imagem:""},
  {id: 4, nome:"", preco:"", descricao:"", imagem:""},
  {id: 5, nome:"", preco:"", descricao:"", imagem:""},
  {id: 6, nome:"", preco:"", descricao:"", imagem:""},
  {id: 7, nome:"", preco:"", descricao:"", imagem:""},
  {id: 8, nome:"", preco:"", descricao:"", imagem:""},
  {id: 9, nome:"", preco:"", descricao:"", imagem:""},
  {id: 10, nome:"", preco:"", descricao:"", imagem:""},
]

app.get('/', (req, res) => {
  res.render('index', { message: 'LISTA DE PRODUTOS' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'LISTA DE PRODUTOS' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});