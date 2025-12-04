import { redirect } from 'next/navigation';
import { cliente } from '../../../database/tabelas';

import "../../css/cadastro.css";

async function AlteraCli(formData) {
    'use server';

    const id = formData.get('id');
    const nome_f = formData.get('Nome');
    const email_f = formData.get('Email');

    const cli = await cliente.findByPk(id);
    cli.nome = nome_f;
    cli.email = email_f;

    await cli.save();
    redirect('/clientes');
}


async function TelaAlteraCliente({ searchParams }) {
    const id = searchParams.id;
    const cli = await cliente.findByPk(id);
    return (
        <div>
            <h>Alterando o cliente</h>
                <form action={AlteraCli}>
                    <input type="hidden" name="id" defaultValue={cli.id}></input>
                   
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="Nome" defaultValue={cli.nome}></input> <br></br>

                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" defaultValue={cli.email}></input> <br></br>

                    <button>Salvar</button>
                </form>
        </div>
    );
}

export default TelaAlteraCliente;