const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', { produtos });
});

const produtos = [
  {id: 1, nome:"Tesla Coil", preco:"359", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/1-tesla.jpg"},
  {id: 2, nome:"Vans Old Skool", preco:"399", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/2-vans.jpg"},
  {id: 3, nome:"Nike Dunk Low", preco:"1299", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/3-dunk.jpg"},
  {id: 4, nome:"Nike Tn", preco:"1359", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/4-tn.jpg"},
  {id: 5, nome:"Nike Socks", preco:"3799", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/5-shocks.jpg"},
  {id: 6, nome:"Nike Jordan", preco:"2000", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/6-jordan.jpg"},
  {id: 7, nome:"Nike Air Max", preco:"999", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/7-airmax.jpg"},
  {id: 8, nome:"Nike Air Force", preco:"789", descricao:"Tenises de luxos de otima qualidade 100% oliginal, oferecido pela industria pastel de flango multinacionalmente reconhecida, por sempre entregar produtos de otima qualidade.", imagem:"/imagem/8-airforce.jpg"},
];

function buscarProdutoPorId (id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorId(req.params.id)
  res.render('produto', {produto});
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});