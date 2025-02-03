import Logo from './img/jobcode.png'

export const Form = () => {
    return (
        <>
            <div className="bg-sky-700 max-w-3xl flex flex-col items-center justify-center gap-2 mx-auto my-20 py-10 p-6 rounded-md shadow-lg">

                <img src={Logo} alt="Logo" className="w-40 rounded-full my-5" />

                <h1 className="text-3xl w-full text-center text-sky-500 font-bold my-6">Crie sua conta</h1>

                <form className="w-full grid grid-cols-3 sm:grid-cols-2 gap-4">

                    <div>
                        <label htmlFor="nome" className="text-lg text-sky-500">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="sobrenome" className="text-lg text-sky-500">
                            Sobrenome
                        </label>
                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="text-lg text-sky-500">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="text-lg text-sky-500">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmasenha" className="text-lg text-sky-500">
                            Confirma Senha
                        </label>
                        <input
                            type="password"
                            id="confirmasenha"
                            name="senconfirmasenhaha"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="cpf" className="text-lg text-sky-500">
                            CPF
                        </label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            autoComplete="off"
                            className="mt-1 block w-full pl-2 h-8 rounded-sm shadow-sm"
                        />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="pais" className="text-lg text-sky-500">
                            País
                        </label>
                        <select
                            id="pais"
                            name="pais"
                            className="mt-1 block w-full h-8 pl-2 pr-4 rounded-sm shadow-sm text-gray-700"
                        >
                            <option value="">Selecione um país</option>
                            <option value="">Selecione um país</option>
                            <option value="africa_do_sul">África do Sul</option>
                            <option value="alemanha">Alemanha</option>
                            <option value="argentina">Argentina</option>
                            <option value="australia">Austrália</option>
                            <option value="austria">Áustria</option>
                            <option value="belgica">Bélgica</option>
                            <option value="brasil">Brasil</option>
                            <option value="canada">Canadá</option>
                            <option value="chile">Chile</option>
                            <option value="china">China</option>
                            <option value="colombia">Colômbia</option>
                            <option value="coreia_do_sul">Coreia do Sul</option>
                            <option value="dinamarca">Dinamarca</option>
                            <option value="espanha">Espanha</option>
                            <option value="estados_unidos">Estados Unidos</option>
                            <option value="franca">França</option>
                            <option value="grecia">Grécia</option>
                            <option value="holanda">Holanda</option>
                            <option value="india">Índia</option>
                            <option value="italia">Itália</option>
                            <option value="japao">Japão</option>
                            <option value="mexico">México</option>
                            <option value="noruega">Noruega</option>
                            <option value="portugal">Portugal</option>
                            <option value="reino_unido">Reino Unido</option>
                            <option value="russia">Rússia</option>
                            <option value="suecia">Suécia</option>
                            <option value="suica">Suíça</option>
                            <option value="turquia">Turquia</option>

                        </select>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="estrangeiro"
                            name="estrangeiro"
                            className="mr-2 w-4 h-4 text-sky-500 border-gray-300 rounded-sm"
                        />
                        <label htmlFor="estrangeiro" className="text-lg text-sky-500">
                            Sou estrangeiro
                        </label>
                    </div>

                    <div className="sm:col-span-2 flex items-center justify-center">
                        <input
                            type="checkbox"
                            id="receber_ofertas"
                            name="receber_ofertas"
                            className="mr-2 w-4 h-4 text-sky-500 border-gray-300 rounded focus:ring focus:ring-sky-300"
                        />
                        <label htmlFor="receber_ofertas" className="text-lg text-sky-300">
                            Receber ofertas, promoções exclusivas, cupons e novidades por email.
                        </label>
                    </div>

                    <div className="sm:col-span-2 flex items-center justify-center">
                        <button type="button" className="w-full h-10 text-white bg-sky-800 rounded-md border-sky-600 border-2 hover:bg-sky-900">Criar Conta</button>
                    </div>

                </form>
            </div>


        </>
    )
}