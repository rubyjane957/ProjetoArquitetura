//page das categorias

import "../css/listagem.css";

import { categoria } from "../../database/tabelas";
import { redirect } from "next/navigation";

async function deletarCategoria(formData) {
    'use server';
    const id = formData.get('id');
    const Categoria = await categoria.findByPk(id);
    await Categoria.destroy();
    redirect('/categorias');
}
async function Categoria() {
    const categorias = await categoria.findAll();
    return (
        <div>
            <h1>Lista de Categorias</h1>
            <a href="categorias/novaCategoria">Criar Categoria</a>
            <table border = "1">

                <thead>
                    <tr>
                        <th>Nome da Categoria</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        categorias.map(function (fil){
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome_cat}</td>
                                    <td>
                                        <form action = {'/categorias/altera'}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Alterar</button>
                                        </form>

                                        <form action = {deletarCategoria}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Excluir</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </table>
        </div>
    );
}

export default Categoria;