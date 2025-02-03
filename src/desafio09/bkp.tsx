import { Link } from "react-router-dom";

export const Tela02 = () => {

    const handleOptionClick = (option: string) => {
        const op1: string = 'title'
        if (option === op1) {
            console.log('acertou');
        } else {
            console.log('não acertou');
        }
        console.log(`Opção selecionada: ${option}`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-orange-500">
            <header className="bg-blue-600 text-white py-4 px-6">
                <h1 className="text-lg font-bold text-center">Pergunta Aí</h1>
            </header>

            <main className="flex-grow flex items-start justify-center px-6 lg:px-0 lg:bg-yellow-500 md:bg-green-500 sm:bg-purple-500">
                <div className="bg-white rounded-lg shadow-md px-6 m-6 w-full text-center lg:w-1/2">
                    <h2 className="text-xl text-black font-semibold mb-4">Bem-vindo ao Quiz</h2>
                    <p className="text-gray-700">
                        Teste de layout responsivo para aplicação mobile usando React e Tailwind.
                    </p>
                    <h2 className="font-bold text-black text-3xl text-left lg:font-extrabold lg:text-4xl">
                        <p className="rounded-md border-x-2 p-4 text-yellow-400 bg-blue-800">
                            2) Qual atributo HTML é usado para definir o título de uma página web?
                        </p>
                        <div className="text-gray-800 flex flex-col">
                            <button className="my-2 p-2 text-left rounded-md hover:bg-slate-300" onClick={() => handleOptionClick('title')}>
                                a) title
                            </button>
                            <button className="my-2 p-2 text-left rounded-md hover:bg-slate-300" onClick={() => handleOptionClick('head')}>
                                b) head
                            </button>
                            <button className="my-2 p-2 text-left rounded-md hover:bg-slate-300" onClick={() => handleOptionClick('body')}>
                                c) body
                            </button>
                            <button className="my-2 p-2 text-left rounded-md hover:bg-slate-300" onClick={() => handleOptionClick('header')}>
                                d) header
                            </button>
                        </div>
                        <div className="flex justify-between mb-6 mt-6">
                            <Link to={'/p01'} className="p-2 text-center rounded-md text-white bg-black hover:bg-green-600">Voltar</Link>
                            <Link to={'/p03'} className="p-2 text-center rounded-md text-white bg-black hover:bg-green-600">Avançar</Link>
                        </div>
                    </h2>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
                <button className="button1 text-sm font-medium">Início</button>
                <button className="button1 text-sm font-medium">Perfil</button>
                <button className="button1 text-sm font-medium">Configurações</button>
            </footer>
        </div>
    );
};
