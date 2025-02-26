import { Link } from "react-router-dom";
import { Pergunta, perguntas } from "./perguntas";
import { useState } from "react";

const embaralharPerguntas = (perguntas: Pergunta[]) => {
    return perguntas.sort(() => Math.random() - 0.5);
};

const filtrarPorDificuldade = (perguntas: Pergunta[], nivel: string) => {
    return perguntas.filter((pergunta) => pergunta.dificuldade === nivel);
};

const filtrarPorCategoria = (perguntas: Pergunta[], categoria: string) => {
    return perguntas.filter((pergunta) => pergunta.categoria === categoria);
};

// CONTROLE :: Definição manual da dificuldade e categoria (pode ser alterada conforme necessário)
const nivelSelecionado = "difícil"; // "fácil" | "média" | "difícil"
const categoriaSelecionada = "expressões numéricas"; // "react+typescript" | "html" | "Java" | "CSS" | "expressões numéricas"

const perguntasFiltradas = embaralharPerguntas(
    filtrarPorCategoria(filtrarPorDificuldade(perguntas, nivelSelecionado), categoriaSelecionada)
);

export const Tela = () => {
    const [indice, setIndice] = useState(0);
    const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
    const [finalizado, setFinalizado] = useState(false);

    const perguntaAtual = perguntasFiltradas[indice];

    const handleOptionClick = (resposta: string) => {
        setRespostas((prev) => ({ ...prev, [perguntaAtual.id]: resposta }));
    };

    const proximaPergunta = () => {
        if (indice < perguntasFiltradas.length - 1) {
            setIndice(indice + 1);
        } else {
            setFinalizado(true);
        }
    };

    const calcularPontuacao = () => {
        return perguntasFiltradas.filter((p) => respostas[p.id] === p.correta).length;
    };

    const voltarPergunta = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
    };


    return (
        <div className="flex flex-col min-h-screen bg-orange-500">

            <header className="bg-blue-600 text-white py-4 px-6">
                <h1 className="text-lg font-bold text-center">Responde Aí</h1>
            </header>

            <main className="flex-grow flex items-start justify-center px-6 lg:px-0 lg:bg-yellow-500 md:bg-green-500 sm:bg-purple-500">
                <div className="bg-white text-black rounded-lg shadow-md px-6 my-6 w-full text-center lg:w-1/2">
                    {!finalizado ? (
                        <>
                            <h2 className="font-bold text-black text-3xl text-left lg:font-extrabold lg:text-4xl">
                                Pergunta {indice + 1} de {perguntasFiltradas.length}
                            </h2>
                            <p className="rounded-md border-x-2 p-4 text-2xl text-justify font-bold lg:font-extrabold lg:text-4xl text-yellow-400 bg-blue-700">
                                {perguntaAtual.pergunta}
                            </p>

                            <div className="flex flex-col mt-4">
                                {perguntaAtual.opcoes.map((opcao, index) => (
                                    <button
                                        key={opcao}
                                        className={`my-2 p-0 text-justify tracking-tighter rounded-md font-bold text-2xl w-auto lg:font-extrabold hover:bg-slate-300 lg:text-4xl ${respostas[perguntaAtual.id] === opcao ? "bg-blue-500 text-white" : "bg-white"
                                            }`}
                                        onClick={() => handleOptionClick(opcao)}
                                    >
                                        {String.fromCharCode(97 + index)})<span className="pl-2">{opcao}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-between mt-4">
                                {indice > 0 ? (
                                    <button
                                        className="p-2 bg-gray-600 text-white rounded-md w-auto mb-6 mt-6 text-2xl font-bold hover:bg-red-600 lg:font-extrabold lg:text-4xl"
                                        onClick={voltarPergunta}
                                    >
                                        Voltar
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                <button
                                    className="p-2 bg-gray-600 text-white rounded-md w-auto mb-6 mt-6 text-2xl font-bold hover:bg-green-600 lg:font-extrabold lg:text-4xl"
                                    onClick={proximaPergunta}
                                    disabled={!respostas[perguntaAtual.id]}
                                >
                                    {indice < perguntasFiltradas.length - 1 ? "Próxima" : "Finalizar"}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold mb-4 lg:font-extrabold">Quiz Finalizado!</h2>
                            <h2 className="text-5x1 font-semibold lg:font-extrabold lg:text-4x1 ">
                                {calcularPontuacao() === perguntasFiltradas.length ? (
                                    <h2 className="text-green-600">
                                        Você acertou {calcularPontuacao()} de {perguntasFiltradas.length} perguntas!
                                    </h2>
                                ) : (
                                    <h2 className="text-red-600">
                                        Você acertou {calcularPontuacao()} de {perguntasFiltradas.length} perguntas!
                                    </h2>
                                )}
                                <a href="/quiz" className="p-2 bg-gray-600 text-white rounded-md w-1/5 mb-2 mt-2 text-2xl font-bold hover:bg-sky-600 lg:font-extrabold">
                                    Novo Quiz
                                </a>
                            </h2>
                        </div>
                    )}
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
                <button className="button1 text-sm font-medium">Início</button>
                <Link to={'/Gabarito'} className="button1 text-sm text-center font-medium">Gabarito</Link>
                <button className="button1 text-sm font-medium">Configurações</button>
            </footer>
        </div>
    );
};


