import { redirect } from 'next/navigation';
import { projeto } from '../../../database/tabelas';

async function AlteraProj(formData) {
    'use server';

    const id = formData.get('id');
    const titulo_f = formData.get('Titulo');
    const valor_f = formData.get('Valor');

    const proj = await projeto.findByPk(id);
    proj.titulo = titulo_f;
    proj.valor = valor_f;

    await proj.save();
    redirect('/projetos');
}


async function TelaAlteraProjeto({ searchParams }) {
    const id = searchParams.id;
    const proj = await projeto.findByPk(id);
    return (
        <>
            <h>Alterando o projeto</h>
                <form action={AlteraProj}>
                    <input type="hidden" name="id" defaultValue={proj.id}></input>
                   
                    <label htmlFor="Titulo">Título</label>
                    <input type="string" name="Titulo" defaultValue={proj.titulo}></input> <br></br>

                    <label htmlFor="Valor">Valor</label>
                    <input type="number" name="Valor" defaultValue={proj.valor}></input> <br></br>


                    <button>Salvar</button>
                </form>
        </>
    );
}

export default TelaAlteraProjeto;