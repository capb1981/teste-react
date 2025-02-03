import { ReactElement } from "react"

type Props = {
    children: ReactElement
}

export const Conteudo = ({ children }: Props) => {
    return (
        <>
            <div className="w-full h-screen bg-blue-300 border border-white-200 rounded-md">
                <h1 className="text-3xl">
                    {children}
                </h1>
            </div>
        </>
    )
}