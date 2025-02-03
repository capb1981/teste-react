import { perguntas } from "./perguntas";

export const Gabarito = () => {
    return (

        <div className="flex flex-col min-h-screen bg-orange-500 p-6">
            <a href="/quiz" className='text-white hover:underline'>voltar</a>

            <h1 className="text-center text-3xl font-bold text-white mb-4">Lista de Perguntas</h1>

            <div className="bg-white text-black rounded-lg shadow-md p-6">

                {perguntas.map((pergunta, index) => (

                    <div key={pergunta.id} className="mb-6 border-b pb-4">
                        <h2 className="text-2xl font-bold text-blue-700">{index + 1}. {pergunta.pergunta}</h2>
                        <ul className="mt-2">
                            {pergunta.opcoes.map((opcao, i) => (
                                <li key={i} className={`p-2 my-1 rounded-md text-lg ${opcao === pergunta.correta ? "bg-green-300 font-bold" : "bg-gray-200"}`}>
                                    {String.fromCharCode(97 + i)}) {opcao}
                                </li>
                            ))}
                        </ul>
                    </div>

                ))}

            </div>

        </div>

    )
}