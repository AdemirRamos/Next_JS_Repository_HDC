import Link from 'next/link'

export async function getStaticProps(context) {
    const {params} = context

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.todoid}`,
    )

    const todo = await data.json()

    return (
        props: {todo}, 
    )
}

export async function getStaticPaths() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((todo) => {
        return(
            params: {
                todoid: `${todo.id}`
            }
        )
    })

    return(paths, callback: false)
}

export default function Todo(todo) {

    return(
        <>
        
            <Link href="/todos"><a>Voltar</a></Link>
            <h1>Exibindo o `todo` número: {todo.id}</h1>
            <h2>Texto: {todo.title}</h2>

            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todo.id}/comments/1`}><a>Detalhes do comentário.</a></Link></p>
            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todo.id}/comments/2`}><a>Detalhes do comentário.</a></Link></p>
            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todo.id}/comments/3`}><a>Detalhes do comentário.</a></Link></p>

        </>
    )
}
