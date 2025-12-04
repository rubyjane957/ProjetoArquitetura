//novoProjeto
import { projeto } from  '../../../database/tabelas';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function InsereProjeto(formData) {
    'use server';
    const dados = {
        titulo: formData.get('Titulo'),
        valor: formData.get('Valor'),
    };
    await projeto.create(dados);
    redirect('/projetos')
}

function TelaNovoProjeto() {
    return (
        <form action={InsereProjeto}>

            <label htmlFor="Titulo">Título</label>
            <input type="string" name="Titulo"></input> <br></br>

            <label htmlFor="Valor">Valor</label>
            <input type="number" name="Valor"></input> <br></br>

            <button className='bt-Classico'>Cadastrar</button>
        </form>
    );
}

export default TelaNovoProjeto;