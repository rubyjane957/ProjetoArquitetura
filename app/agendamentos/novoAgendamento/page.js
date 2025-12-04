//novo Agendamento
import { agendamento } from '../../../database/tabelas';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

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
        <div>
            <form action={CadastroAgendamento}>

                <label htmlFor="Horario">Horário: </label>
                <input type="time" name="Horario"></input> <br></br>

                <label htmlFor="Data">Data: </label>
                <input type="date" name="Data"></input> <br></br> 

            <button className='bt-Classico'>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoAgendamento;