import { Pessoa } from './Pessoa'

export const Desafio06 = () => {
    return (
        <>
            <a href="/" className='text-white hover:underline'>voltar</a>
            <Pessoa />

            <a
                className='block shadow bg-stone-600 p-4 m-10 text-white text-center rounded-xl hover:bg-stone-500'
                href=""
            >
                Cadastrar
            </a>
        </>
    )
}