//novo Arquiteto
import { arquiteto } from '../../../database/tabelas';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function InsereArquiteto(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'), //1ª > 'tabelas'; 2º > input
        especializacao: formData.get('especializacao'),
    };
    await arquiteto.create(dados);
    redirect('/arquitetos')
}

   
function TelaNovoArquiteto(){
    return (
        <form action={InsereArquiteto}>

            <label htmlFor="Nome">Nome</label> <br></br>
            <input type="text" name="nome"></input> <br></br>
            
            <label htmlFor="Especializacao">Especialização</label> <br></br>
            <input type="text" name="especializacao"></input> <br></br>
        
            <button className='bt-Classico'>Cadastrar</button>
        </form>
    );
}

export default TelaNovoArquiteto;