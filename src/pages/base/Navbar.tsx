import { Link } from "react-router-dom"


export const Navbar = () => {

    const estilo: string = 'px-4 py-2 ml-0 mr-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white';

    return (

        <nav className="my-2">
            <Link to={'/'} className={estilo}>Home</Link>
            <Link to={'/login'} className={estilo}>Login</Link>
            <Link to={'/sobre'} className={estilo}>Sobre</Link>
            <Link to={'/estudando'} className={estilo}>Estudando</Link>
            <Link to={'/listaFor'} className={estilo}>ListaFOR</Link>
            <Link to={'/teste01'} className={estilo}>Teste01</Link>
            <Link to={'/desafio03'} className={estilo}>Desafio03</Link>
            <Link to={'/desafio04'} className={estilo}>Desafio04</Link>
            <Link to={'/desafio05'} className={estilo}>Desafio05</Link>
            <Link to={'/desafio06'} className={estilo}>Desafio06</Link>
            <Link to={'/desafio07'} className={estilo}>Desafio07</Link>
            <Link to={'/desafio08'} className={estilo}>Desafio08</Link>
            <Link to={'/quiz'} className={estilo}>Quiz</Link>
        </nav>

    )
}