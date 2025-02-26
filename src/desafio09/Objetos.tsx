import { useState } from "react";

export const Objetos = () => {

    interface Pessoa {
        id: number;
        nome: string;
    };

    function imprimir(): Pessoa {

        const pessoa: Pessoa = {
            id: 10,
            nome: "Beto",
        }
        return pessoa;

    }

    const [pessoa, setPessoa] = useState<Pessoa>({ id: 0, nome: 'semnome' });

    // ----------------------------------------------- //

    interface Usuario {
        id: number;
        nome: string;
        email: string;
    }

    const usuario: Usuario = {
        id: 1,
        nome: "João",
        email: "joao@email.com"
    };


    // ----------------------------------------------- //

    function voltas() {

        for (let i = 0; i < 10; i++) {
            console.log('Volta: ' + (i + 1))
        }

    }

    return (
        <div>

            <div className="m-4">
                <strong>Dados da Pessoa</strong>
                <div className="m-2">{pessoa.id + ' | ' + pessoa.nome}</div>
                <button className="w-1/12 bg-slate-600 hover:bg-slate-500" onClick={() => setPessoa(imprimir())}>Atualizar Dados</button>
            </div>

            <hr className="m-4 w-1/6" />

            <div className="m-4">
                <strong>Dados do Usuário</strong>
                <p>ID: {usuario.id}</p>
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.email}</p>
            </div>

            <hr className="m-4 w-1/6" />

            <div className="m-4">
                <button className="w-1/12 bg-slate-600 hover:bg-slate-500" onClick={voltas}>Voltas</button>
            </div>

        </div >
    )
}
