import { redirect } from 'next/navigation';
import { arquiteto } from '../../../database/tabelas';

import "../../css/cadastro.css";

async function AlteraArq(formData) {
    'use server';

    const id = formData.get('id');
    const nome_f = formData.get('Nome');
    const especializacao_f = formData.get('Especializacao');

    const arq = await arquiteto.findByPk(id);
    arq.nome = nome_f;
    arq.especializacao = especializacao_f;

    await arq.save();
    redirect('/arquitetos');
}


async function TelaAlteraArquiteto({ searchParams }) {
    const id = searchParams.id;
    const arq = await arquiteto.findByPk(id);
    return (
        <div>
            <h>Alterando o arquiteto</h>
                <form action={AlteraArq}>
                    <input type="hidden" name="id" defaultValue={arq.id}></input>
                   
                    <label htmlFor="Nome">Nome</label> <br></br>
                    <input type="text" name="Nome" defaultValue={arq.nome}></input> <br></br>
           
                    <label htmlFor="Especializacao">Especialização</label> <br></br>
                    <input type="text" name="Especializacao" defaultValue={arq.especializacao}></input> <br></br>


                    <button>Salvar</button>
                </form>


        </div>
    );
}

export default TelaAlteraArquiteto;