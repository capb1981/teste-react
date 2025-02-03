import { useState } from "react";

export const Teste01: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo(e.currentTarget.value);
                        e.currentTarget.value = '';
                    }
                }}
                placeholder="Adicione uma tarefa"
            />
        </div>
    );
};

