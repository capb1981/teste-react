import { Header } from './components/Header'
import { Conteudo01 } from './components/Conteudo01'
import { Conteudo02 } from './components/Conteudo02'
import { Footer } from './components/Footer'
import './Desafio05.css'

export const Desafio05 = () => {
    return (
        <div className="w-3/5 mx-auto flex flex-col text-white" id='content' >
            <a href="/" className='text-white hover:underline'>voltar</a>
            <div className="flex justify-between h-20">
                <Header />
            </div>

            <div className="flex flex-col items-end pr-24 py-12">
                <Conteudo01 />
            </div>

            <div>
                <Conteudo02 />
            </div>

            <div id='footer' className='shadow-xl shadow-white'>
                <Footer />
            </div>

        </div>
    )
}
