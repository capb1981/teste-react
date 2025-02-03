export const Lista: React.FC = () => {

    interface Pessoa {
        id: number,
        nome: string,
        idade: number
    }

    const pessoas: Pessoa[] = [
        { id: 1, nome: 'Beto', idade: 43 },
        { id: 2, nome: 'Aridete', idade: 45 },
        { id: 3, nome: 'Carlos', idade: 25 },
        { id: 4, nome: 'Juliana', idade: 28 },
        { id: 5, nome: 'Pedro', idade: 35 },
        { id: 6, nome: 'Mariana', idade: 22 },
        { id: 7, nome: 'Fernando', idade: 40 },
        { id: 8, nome: 'Camila', idade: 27 },
        { id: 9, nome: 'Rafael', idade: 33 },
        { id: 10, nome: 'Patrícia', idade: 29 },
        { id: 11, nome: 'Diego', idade: 31 },
        { id: 12, nome: 'Aline', idade: 26 },
        { id: 13, nome: 'Gustavo', idade: 38 },
        { id: 14, nome: 'Carolina', idade: 32 },
        { id: 15, nome: 'Lucas', idade: 24 },
        { id: 16, nome: 'Eduardo', idade: 36 },
        { id: 17, nome: 'Vanessa', idade: 23 },
        { id: 18, nome: 'João', idade: 39 },
        { id: 19, nome: 'Fernanda', idade: 37 },
        { id: 20, nome: 'Sandra', idade: 42 },
    ];

    return (
        <div className="text-white">
            <a href="/" className='text-white hover:underline'>voltar</a>
            <h2>Lista de Pessoas</h2>
            <ul>
                {pessoas.map((pessoa) => (
                    <li key={pessoa.id}>
                        ID: {pessoa.id} | {pessoa.nome} - Idade: {pessoa.idade} anos
                    </li>
                ))}
            </ul>
        </div>
    );
};