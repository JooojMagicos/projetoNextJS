

export default function magiadojsx()
{
    const magia = <strong>HTML Dentro do JavaScript!</strong>
    const tecnologias = "React e Next.js"
    
    return(
        <div className='bg-blue-300 p-3 m-3 rounded-xl'>
            <p>Este é Meu Componente MagiaDoJSX</p>
            <p>Um Componente é uma funcao que retorna JSX - {magia} </p>
            <p>Os Componentes sao usados em {tecnologias}</p>
        </div>
    )
}