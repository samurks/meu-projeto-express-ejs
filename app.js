const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome:"Tesla Coil", preco:"", descricao:"", imagem:""},
  {id: 2, nome:"Vans Old Skool", preco:"", descricao:"", imagem:""},
  {id: 3, nome:"Nike Dunk Low", preco:"", descricao:"", imagem:""},
  {id: 4, nome:"Nike Tn", preco:"", descricao:"", imagem:""},
  {id: 5, nome:"Nike Socks", preco:"", descricao:"", imagem:""},
  {id: 6, nome:"Nike Jordan", preco:"", descricao:"", imagem:""},
];

function buscarProdutoPorId (id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { message: 'LISTA DE PRODUTOS' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'LISTA DE PRODUTOS' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});