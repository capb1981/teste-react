export const IfElseComponente = () => {

    const isLogado = true;

    if (isLogado) {
        return <h1>Bem-vindo de volta! (<i>Componente</i>)</h1>;
    } else {
        return <h1>Por favor, faça login. (<i>Componente</i>)</h1>;
    }

}