import { Pessoa } from "./Pessoa"
import { MouseEvent } from 'react';

export const Grupo = () => {

    const msg = "Fim da Lista";

    const handleClique = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicou');
    }

    return (
        <div className="text-3xl font-semibold m-4">
            <h2 className="text-gray-500 font-bold pb-4">Grupo JOBCODE</h2>
            <ul>

                <Pessoa nome="Allan" telefone={99999999} />
                <Pessoa nome="Beto" telefone={99999999} />
                <Pessoa nome="Eduarda" telefone={99999999} />
                <Pessoa nome="Ricardo" telefone={99999999} />
                <Pessoa nome="Silas" telefone={99999999} />

            </ul >

            {msg}

            <button onClick={handleClique}>Opa</button>

        </div >
    )
}