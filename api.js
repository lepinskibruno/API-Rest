import express from "express";

const app = express();
const transacoesValidas = [];

app.use(express.json());

app.post("/transacao", (req, res) => {
  const { valor, dataHora } = req.body ?? {};

  // Campos obrigatórios e tipos válidos
  if (
    valor === undefined ||
    typeof valor !== "number" ||
    !Number.isFinite(valor) ||
    typeof dataHora !== "string" ||
    dataHora.trim() === ""
  ) {
    return res.status(422).end();
  }

  const data = new Date(dataHora);
  const timestamp = data.getTime();

  // Data inválida ou transação no futuro
  if (
    !Number.isFinite(timestamp) ||
    timestamp > Date.now() ||
    valor < 0
  ) {
    return res.status(422).end();
  }

  transacoesValidas.push({
    valor,
    dataHora: data.toISOString()
  });

  return res.status(201).end();
});

app.delete("/transacao", (req, res) => {
  transacoesValidas.length = 0;
  return res.status(200).end();
});

app.get("/estatistica", (req, res) => {
  const agora = Date.now();

  const recentes = transacoesValidas.filter((transacao) => {
    const timestamp = new Date(transacao.dataHora).getTime();

    return timestamp >= agora - 60000 && timestamp <= agora;
  });

  const valores = recentes.map((transacao) => transacao.valor);
  const count = valores.length;

  const sum = valores.reduce((total, valor) => total + valor, 0);
  const avg = count ? sum / count : 0;
  const min = count ? Math.min(...valores) : 0;
  const max = count ? Math.max(...valores) : 0;

  return res.status(200).json({
    count,
    sum,
    avg,
    min,
    max
  });
});

// JSON malformado deve responder 400
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400) {
    return res.status(400).end();
  }

  return next(err);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});