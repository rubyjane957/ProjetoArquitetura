//page dos agendamentos

import "../css/listagem.css";

import { agendamento } from "../../database/tabelas";
import { redirect } from "next/navigation";

async function deletarAgendamento(formData) {
    'use server';
    const id = formData.get('id');
    const Agendamento = await agendamento.findByPk(id);
    await Agendamento.destroy();
    redirect('/agendamentos');
}

async function Agendamento() {
    const agendamentos = await agendamento.findAll();
    return (
        <div>
            <h1>Lista de Agendamentos</h1>
            <a href="/agendamentos/novoAgendamento">Agendar</a>
            <table border = "1">

                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        agendamentos.map(function (fil){
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.horario}</td>
                                    <td>{fil.data}</td>
                                    <td>
                                        <form action = {'/agendamentos/altera'}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Alterar</button>
                                        </form>

                                        <form action = {deletarAgendamento}>
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

export default Agendamento;