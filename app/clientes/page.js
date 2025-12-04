//page dos clientes 

import "../css/listagem.css";

import { cliente } from "../../database/tabelas";
import { redirect } from "next/navigation";

async function deletarCliente(formData) {
    'use server';
    const id = formData.get('id');
    const Cliente = await cliente.findByPk(id);
    await Cliente.destroy();
    redirect('/clientes');
}

async function Cliente() {
    const clientes = await cliente.findAll();
    return (
        <div>
            <h1>Lista de Clientes</h1>
            <a href="clientes/novoCliente">Criar Cliente</a>
            <table border = "1">

                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        clientes.map(function (fil){
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome}</td>
                                    <td>{fil.email}</td>
                                    <td>
                                        <form action = {'/clientes/altera'}>
                                            <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                                            <button>Alterar</button>
                                        </form>

                                        <form action = {deletarCliente}>
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

export default Cliente;