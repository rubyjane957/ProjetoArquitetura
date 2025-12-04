import { redirect } from 'next/navigation';
import { agendamento } from '../../../database/tabelas';

async function AlteraAgdm(formData) {
    'use server';

    const id = formData.get('id');
    const horario_f = formData.get('Horario');
    const data_f = formData.get('Data');

    const agdm = await agendamento.findByPk(id); //alteração do banco com os dados novos:
    agdm.horario = horario_f;
    agdm.data = data_f;

    await agdm.save();
    redirect('/agendamentos');
}


async function TelaAlteraAgendamento({ searchParams }) {
    const id = searchParams.id;
    const agdm = await agendamento.findByPk(id);
    return (
        <>
            <h>Alterando o agendamento</h>
                <form action={AlteraAgdm}>
                    <input type="hidden" name="id" defaultValue={agdm.id}></input>

                    <label htmlFor="Horario">Horário</label>
                    <input type="time" name="Horario" defaultValue={agdm.horario}></input> <br></br>

                    <label htmlFor="Data">Data</label>
                    <input type="date" name="Data" defaultValue={agdm.data}></input> <br></br> 

                    <button>Salvar</button>
                </form>

        </>
    );
}

export default TelaAlteraAgendamento;