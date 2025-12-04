//novaCategoria
import { categoria } from '../../../database/tabelas';
import { redirect } from 'next/navigation';

async function CadastrarCategoria(formData) {
    'use server';
    const dados = {
        nome_cat: formData.get('nome_categoria'),
    };
    await categoria.create(dados);
    redirect('/categorias')
}

function TelaNovaCategoria() {
    return (
        <form action={CadastrarCategoria}>
            
        <label htmlFor="Nome_Categoria">Nome da Categoria</label>
        <input type="string" name="nome_categoria"></input> <br></br>

        <button>Cadastrar</button>
        </form>
    );
}

export default TelaNovaCategoria;