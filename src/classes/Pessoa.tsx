
type Props = {
    nome: string,
    telefone: number
}

export const Pessoa = (props: Props) => {

    //const { nome, telefone } = props

    return (
        <li className="py-3">
            <div className="text-red-600">Nome: {props.nome}</div>
            <div className="text-blue-600">Telefone: {props.telefone}</div>
        </li>
    )
}