import { Link } from "react-router-dom"

export const Estudando = () => {
    return (
        <>
            <body className="bg-gray-100">

                <div className="flex h-screen">

                    <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col">
                        <div className="p-4 text-center text-xl font-semibold border-b border-gray-700">
                            Painel de Controle
                        </div>
                        <nav className="flex-1 px-4 py-6">
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Início</a>
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Relatórios</a>
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Usuários</a>
                            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Configurações</a>
                        </nav>
                        <div className="p-4 border-t border-gray-700 text-center">
                            <Link to={'/'} className="px-24 py-2 bg-red-600 rounded hover:bg-red-500">Sair</Link>
                        </div>
                    </aside>

                    <div className="flex-1 flex flex-col">

                        <header className="bg-white shadow p-4 flex justify-between items-center">
                            <h1 className="text-lg font-bold">Bem-vindo Palestrante Silas!</h1>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                        </header>

                        <main className="flex-1 p-6 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-lg font-bold">Usuários</h2>
                                    <p className="mt-2 text-gray-600">150 ativos</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-lg font-bold">Relatórios</h2>
                                    <p className="mt-2 text-gray-600">12 novos</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-lg font-bold">Vendas</h2>
                                    <p className="mt-2 text-gray-600">R$ 20.000</p>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>

            </body>
        </>
    )
}