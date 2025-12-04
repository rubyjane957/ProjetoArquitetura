//page projetos

import "../css/listagem.css";

import { projeto } from "../../database/tabelas";
import { redirect } from "next/navigation";

async function deletarProjeto(formData) {
    'use server';
    const id = formData.get('id');
    const Projeto = await projeto.findByPk(id);
    await Projeto.destroy();
    redirect('/projetos');
}
async function Projeto() {
    const projetos = await projeto.findAll();
    return (
        <div>
            <h1>Lista de Projetos</h1>
            <a href="projetos/novoProjeto">Criar Projeto</a>
            <table border= "1">

                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        projetos.map(function (fil){
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.titulo}</td>
                                    <td>{fil.valor}</td>
                                    <td>
                                        <form action = {'/projetos/altera'}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Alterar</button>
                                        </form>

                                        <form action = {deletarProjeto}>
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

export default Projeto;