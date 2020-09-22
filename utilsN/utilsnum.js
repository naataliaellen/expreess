const express = require("express");
const app = express();
let valores = [];
function minimo(a) {
  const min = a.reduce(function (a, b) {
    return Math.min(a, b);
  });

  return min;
}

function maximo(a) {
  const max = a.reduce(function (a, b) {
    return Math.max(a, b);
  });

  return max;
}

app.get("/minimo", (req, res) => {
  let minimos = req.query.minimos;
  minimos = minimos.split(",");
  for (let i = 0; i <= minimos.length - 1; i++) {
    valores.push(parseInt(minimos[i]));
  }
  const result = {
    Action: "minímo",
    Input: minimos,
    Output: minimo(valores)
  };
  res.json(result);
});

app.get("/maximo", (req, res) => {
  let maximos = req.query.maximos;
  maximos = maximos.split(",");
  for (let i = 0; i <= maximos.length - 1; i++) {
    valores.push(parseInt(maximos[i]));
  }

  const result = {
    Action: "máximo",
    Input: maximos,
    Output: maximo(valores)
  };
  res.json(result);
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
  console.log("Servidor att 8080");
});
