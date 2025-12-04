//novoCliente
import { cliente } from '../../../database/tabelas';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function InsereCliente(formData) {
    'use server';
    const dados = {
        nome: formData.get('Nome'),
        email: formData.get('Email'),
    };
    await cliente.create(dados);
    redirect('/clientes')
}


function TelaNovoCliente() {
    return (
        <form action={InsereCliente}>
            
            <label htmlFor="Nome">Nome</label>
            <input type="text" name="Nome"></input> <br></br>

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email"></input> <br></br>

            <button className='bt-Classico'>Cadastrar</button>
        </form>
    );
}

export default TelaNovoCliente;