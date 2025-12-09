import { Sequelize } from "sequelize";

import pg from 'pg';
const mysql = new Sequelize({
    dialect: 'postgres',
    dialectModule: pg,
    host: 'dpg-d4otvh24i8rc73b0mvrg-a',
    port: '5432',
    database: 'souzaarquitetura', 
    username: 'souzaarquitetura_user', 
    password: 'MZVCAZwWeyeNKeizvlIGWFH8cnETBNyg' 
});

/*
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
*/
export default mysql;

