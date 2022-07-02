import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Commentsid() {

    const router = useRouter()
    const todoid = router.query.todoid
    const commentsid = router.query.commentsid

    return(
        <>
        
            <Link href={`/todoid/${todoid}`}><a>Voltar</a></Link>
            <h1>Exibindo comentário de número: {commentsid}</h1>
            <p>Do `To Do`: {todoid}</p>

        </>
    )
}
