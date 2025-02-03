import { Cabecalho } from "./base/Cabecalho"
import { Conteudo } from "./base/Conteudo"
import { Footer } from "./base/Footer"
import { Navbar } from "./base/Navbar"

export const Login = () => {
    return (
        <>
            <div className="container h-screen w-screen mx-auto flex flex-col items-start justify-center">
                <Navbar />
                <Cabecalho />
                <Conteudo>
                    <>
                        <h1>Login</h1>
                    </>
                </Conteudo>
                <Footer />
            </div>
        </>
    )
}