function lcase(t) {
  return t.toLowerCase();
}

function ucase(t) {
  return t.toUpperCase();
}

const express = require("express");
const app = express();
app.use(express.json());

app.post("/lowercase", (req, res) => {
  const { input } = req.body;
  const resultado = {
    action: "lowercase",
    input,
    output: lcase(input)
  };
  res.json(resultado);
});

app.post("/uppercase", (req, res) => {
  const { input } = req.body;
  const resultado = {
    action: "uppcase",
    input,
    output: ucase(input)
  };
  res.json(resultado);
});

app.listen(3000, () => {
  console.log("Servidor at 3000");
});
