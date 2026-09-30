import express from "express"; 

const app = express();
const transacoesValidas = []
app.get ('/', (req , res) => {
  
})

app.use(express.json()); 
app.post('/transacao', (req, res) => {
  const { valor, dataHora } = req.body;

  if (valor == undefined || dataHora == undefined) {
    res.status(400).end();
  } else {
    if (valor < 0 || new Date(dataHora) > new Date()) {
      res.status(422).end();
    }
    else {
      transacoesValidas.push({ valor, dataHora });
      res.status(201).end();
    }
  }
});
    
app.get('/estatistica', (req, res) => {
  const transacoesRecentes = transacoesValidas.filter((item) => {
    return new Date().getTime() - new Date(item.dataHora).getTime() <= 60000;
  });

  const count = transacoesRecentes.length;

  let sum;
  let avg;
  let min;
  let max;

  if (count === 0) {
    sum = 0;
    avg = 0;
    min = 0;
    max = 0;
  } else {
    sum = transacoesRecentes.reduce((acumulador, itemAtual) => {
      return acumulador + itemAtual.valor;
    }, 0);

    const valores = transacoesRecentes.map((item) => {
      return item.valor;
    });

    avg = sum / count;
    max = Math.max(...valores);
    min = Math.min(...valores);
  }

  res.status(200).json({ count, sum, avg, min, max });
});

app.delete('/transacao', (req, res) => {
  transacoesValidas.length = 0;
  res.status(200).end();
});

app.listen(3000, () => console.log (`O servidor está rodando na porta 3000`));