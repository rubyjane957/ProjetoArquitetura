import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const mysql = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: 'localhost',
    port: '3306',
    database: 'arquitetura', //mudar para o nome do banco atual
    username: 'root', //usuário do mysql
    password: 'root' //senha do mysql
});

export default mysql;

