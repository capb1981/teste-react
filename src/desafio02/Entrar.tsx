import Logo from './img/jobcode.png'
import Google from './img/acessogoogle.png'
import { useState } from 'react'

export const Entrar: React.FC = () => {

    interface Login {
        email: string,
        senha: string
    }

    const [dados, setDados] = useState<Login>({
        email: '',
        senha: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDados({
            ...dados,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(dados);
    };

    return (
        <>
            <div className="bg-sky-700 w-96 flex flex-col items-center justify-center gap-2 mx-auto my-20 py-10 rounded-md">

                <img src={Logo} alt="Logo" className="w-40 rounded-full my-5" />

                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2">

                    <label htmlFor="" className="text-lg w-72 h-8 text-white font-bold">Email</label>
                    <input
                        type="text"
                        className="w-72 h-8 bg-transparent border-b-2 border-sky-800 text-white focus:outline-none"
                        autoComplete="off"
                        name="email"
                        value={dados.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="" className="text-lg w-72 h-8 text-white font-bold py-2">Senha</label>
                    <input
                        type="password"
                        className="w-72 h-8 bg-transparent border-b-2 border-sky-800 text-white focus:outline-none"
                        name="senha"
                        value={dados.senha}
                        onChange={handleChange}
                    />

                    <div className="w-72 h-8 my-5 flex flex-row justify-between">

                        <div className='text-white'>
                            <input type="checkbox" className="focus:outline-none" /> Lembrar
                        </div>
                        <button type="submit" className="text-white border-white rounded-md border-2 px-5 hover:bg-sky-800">Entrar</button>

                    </div>

                    <a href="https://google.com" className='text-gray-100 text-sm hover:underline'>Não tem conta? Cadastre-se</a>

                    <a href="https://google.com/" target='_blank'>
                        <img src={Google} alt="Google" className="w-60 rounded-md" />
                    </a>

                </form>

            </div>

        </>
    )
}