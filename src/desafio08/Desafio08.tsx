import { useState } from "react";

export const Desafio08: React.FC = () => {

    const isLogado = false;

    const [clicouIf, setClicouIf] = useState<string>('');

    const handleClicouIf = () => {
        if (isLogado) {
            setClicouIf('Bem - vindo de volta!');
        } else {
            setClicouIf('Por favor, faça login.');
        }
    };

    interface Item {
        id: number;
        nome: string;
        sobrenome: string;
    }

    const [mostrarLista, setMostrarLista] = useState<boolean>(true);

    const items: Item[] = [
        { id: 1, nome: 'João', sobrenome: 'Nunes' },
        { id: 2, nome: 'Maria', sobrenome: 'Silva' },
        { id: 3, nome: 'Beto', sobrenome: 'Torres' },
    ];

    const toggleMostrarLista = () => {
        setMostrarLista(!mostrarLista);
    }

    return (
        <div className="text-white">
            <a href="/" className='text-white block hover:underline'>voltar</a>
            <button onClick={handleClicouIf} className="text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-5 py-2.5">Clicou IF</button>

            <h1>{clicouIf}</h1>
            <hr className="my-4" />

            <button onClick={toggleMostrarLista} className="text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-5 py-2.5">Mostrar Lista</button>

            {mostrarLista && (
                <ul className="">
                    {items.map(item => (
                        <li key={item.id}>
                            <h2>{item.nome + ' ' + item.sobrenome}</h2>
                        </li>
                    ))}
                    <hr className="my-4" />
                </ul>
            )}


        </div >
    )
}