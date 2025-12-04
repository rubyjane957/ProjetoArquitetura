import { redirect } from 'next/navigation';
import { categoria } from '../../../database/tabelas';

async function AlteraCat(formData) {
    'use server';

    const id = formData.get('id');
    const cat_f = formData.get('nome_categoria');
    
    const cat = await categoria.findByPk(id);
    cat.nome_cat = cat_f;
    
    await cat.save();
    redirect('/categorias');
}

async function TelaAlteraCategoria({ searchParams }) {
    const id = searchParams.id;
    const cat = await categoria.findByPk(id);
    return (
        <>
            <h>Alterando a Categoria</h>
                <form action={AlteraCat}>
                    <input type="hidden" name="id" defaultValue={cat.id}></input>
                   
                    <label htmlFor="Nome_Categoria">Nome da Categoria</label>
                    <input type="string" name="nome_categoria" defaultValue={cat.nome_cat}></input> <br></br>
           
                    <button>Salvar</button>
                </form>
        </>
    );
}

export default TelaAlteraCategoria;