import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";
import { Cliente } from "./Cliente.js";
import { Carro } from "./Carro.js";

export const Proposta = sequelize.define(
	"proposta",
	{
	  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	  },
	  descricao: {
		type: DataTypes.STRING(255),
		allowNull: false,
	  },
	  resposta: {
		type: DataTypes.STRING(255),
	  },
	},
	{
	  tableName: "propostas",
	}
  );
// uma proposta pode ser feita por um cliente
Proposta.belongsTo(Cliente, {
	foreignKey: {
	  name: "cliente_id",
	  allowNull: false,
	},
	onDelete: "RESTRICT",
	onUpdate: "CASCADE",
  });

// um cliente pode fazer varias proposta
Cliente.hasMany(Proposta, {
	foreignKey: "cliente_id",
  });

//uma porposta pode ser feita a um carro
Proposta.belongsTo(Carro, {
	foreignKey: {
	  name: "carro_id",
	  allowNull: false,
	},
	onDelete: "RESTRICT",
	onUpdate: "CASCADE",
  });

// um carro pode ter varias propostas
Carro.hasMany(Proposta, {
	foreignKey: "carro_id",
  });