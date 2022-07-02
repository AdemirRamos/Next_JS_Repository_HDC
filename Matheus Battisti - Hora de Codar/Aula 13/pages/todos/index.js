import styles from '../../styles/todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()

    return {
        props: {todos}
    }
}

export default function Todos(todos) {
    return(
        <>
        
            <h1>Tarefas Para se Fazer:</h1>

            <ul className={styles.toDoList}>

                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>

            </ul>

            <ul className={styles.toDoList}>

                {todos.map((todo) => {
                    <li key={todo.id}>{todo.title}</li>
                })}

            </ul>
        
        </>
    )
}
