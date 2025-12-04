//novo Agendamento
import { agendamento } from '../../../database/tabelas';
import { redirect } from 'next/navigation';

async function CadastroAgendamento(formData) {
    'use server';
    const dados = {
        horario: formData.get('Horario'),
        data: formData.get('Data'),
    };
    await agendamento.create(dados);
    redirect('/agendamentos')
}

function TelaNovoAgendamento() {
    return (
        <form action={CadastroAgendamento}>

            <label htmlFor="Horario">Horário</label>
            <input type="time" name="Horario"></input> <br></br>

            <label htmlFor="Data">Data</label>
            <input type="date" name="Data"></input> <br></br> 

            <button>Cadastrar</button>
        </form>
    );
}

export default TelaNovoAgendamento;