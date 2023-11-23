const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome:"Tesla Coil", preco:"359", descricao:"TENIS", imagem:"https://static3.tcdn.com.br/img/img_prod/901504/tenis_tesla_coil_ice_3231_1_9e2f5701065df2fa77ca9752019462a8.png"},
  {id: 2, nome:"Vans Old Skool", preco:"399", descricao:"TENIS", imagem:"https://cdn.awsli.com.br/600x700/1702/1702086/produto/214885673bfa7fe5c09.jpg"},
  {id: 3, nome:"Nike Dunk Low", preco:"1299", descricao:"TENIS", imagem:"https://cdn.awsli.com.br/600x1000/1167/1167039/produto/217818858/3-s3tk9bnles.jpg"},
  {id: 4, nome:"Nike Tn", preco:"1359", descricao:"TENIS", imagem:"https://authenticfeet.vteximg.com.br/arquivos/ids/268207-600-600/DM003-2-003-1.jpg?v=637934896607100000"},
  {id: 5, nome:"Nike Socks", preco:"3799", descricao:"TENIS", imagem:"https://cdn.awsli.com.br/600x1000/1918/1918121/produto/196654312/1-2d19ae200a.jpg"},
  {id: 6, nome:"Nike Jordan", preco:"2000", descricao:"TENIS", imagem:"https://gringa.com.br/cdn/shop/products/Tenis-Nike-Air-Jordan-1-Retro-High-_Dark-Mocha_-36-Branco-Original00031998l_600x600_crop_center.png?v=1665494110"},
];

function buscarProdutoPorId (id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'LISTA DE PRODUTOS' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});