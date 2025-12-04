import {  DataTypes } from "sequelize";
import mysql from "./mysql.js"; 

//criando as tabelas + atributos
const cliente = mysql.define('cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.TEXT,
});

const agendamento = mysql.define('agendamento',{
    horario: DataTypes.STRING,
    data: DataTypes.DATEONLY
});

const arquiteto = mysql.define('arquiteto', {
    nome: DataTypes.STRING,
    especializacao: DataTypes.STRING
});

const projeto = mysql.define('projeto', {
    titulo: DataTypes.STRING,
    valor: DataTypes.DOUBLE
});

const categoria = mysql.define('categoria', {
    nome_cat: DataTypes.STRING,
});


//relacionamento agend-cli
agendamento.belongsTo(cliente);
cliente.hasMany(agendamento);

//relacionamento agend-arq
agendamento.belongsTo(arquiteto);
arquiteto.hasMany(agendamento);

//relacionamento arq-proj
arquiteto.belongsToMany(projeto, {through: 'responsavel'});
projeto.belongsToMany(arquiteto, {through: 'responsavel'});

//relacionamento cat-proj
categoria.belongsTo(projeto);
projeto.hasMany(categoria);



//sincronização com banco
mysql.sync(); //retirei o force para não destruir os dados
//exportando para o index + navegador
export {cliente, agendamento, arquiteto, projeto, categoria};