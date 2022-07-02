import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Todo() {

    const router = useRouter()
    const todoid = router.query.todoid
    
    //O Next, associa, automaticamente, o nome do parâmetro (aqui passado) com o nome do arquivo "[].js";
    //Desde que os nomes sejam iguais (nome do parâmetro e nome do arquivo "[].js").

    return(
        <>
        
            <Link href="/"><a>Voltar</a></Link>
            <h1>Exibindo o `todo` número: {todoid.id}</h1>

            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todoid}/comments/1`}><a>Detalhes do comentário.</a></Link></p>
            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todoid}/comments/2`}><a>Detalhes do comentário.</a></Link></p>
            <p>Comentário: `blá blá blá...` <Link href={`/todos/${todoid}/comments/3`}><a>Detalhes do comentário.</a></Link></p>

        </>
    )
}
