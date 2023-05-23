import express from "express";
import { sequelize } from "./databases/conecta.js";
import cors from "cors";
import routes from "./routes.js";
import { Carro } from "./models/Carro.js";
import { Cliente } from "./models/Cliente.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com Banco de dados Realizada com sucesso");
	//await sequelize.sync({alter:true}); -> Verifica se ha alterações e atualiza as tabelas se houver
	//await sequelize.sync({force:true}); -> recria as tabelas, mesmo se já existirem
	await Cliente.sync()
	await Carro.sync();
	//await Mother.sync()
  } catch (erro) {
	console.log(erro);
    console.error("Erro na conexão com o banco");
  }
}

conecta_db();

app.get("/", (req, res) => {
  res.send("Atividade : API Revenda de Carro");
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});