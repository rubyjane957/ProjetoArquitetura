//page dos arquitetos

import "../css/listagem.css";

import { arquiteto } from "../../database/tabelas";
import { redirect } from "next/navigation";

async function deletarAquiteto(formData) {
    'use server';
    const id = formData.get('id');
    const Arquiteto = await arquiteto.findByPk(id);
    await Arquiteto.destroy();
    redirect('/arquitetos');
}
async function Arquiteto () {
    const arquitetos = await arquiteto.findAll();
    return (
        <div>
            <h1>Lista de Arquitetos:</h1>
            <a href="/arquitetos/novoArquiteto">Criar Arquiteto</a>
            <table border = "1" >
                 
                <thead> 
                    <tr>
                        <th>NOME</th>
                        <th>ESPECIALIZAÇÃO</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        arquitetos.map(function (fil){
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome}</td>
                                    <td>{fil.especializacao}</td>
                                    <td>
                                        <form action = {'/arquitetos/altera'}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Alterar</button>
                                        </form>

                                        <form action = {deletarAquiteto}>
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
        </div> //fazer nas outras: colocar DIV
    );
}

export default Arquiteto;