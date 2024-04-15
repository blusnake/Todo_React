import Todo from './Todo'

const TodoList = ({ todos, setTodos, status, search }) => {
    let displayedTodos;
    if (status === 'active') {
        displayedTodos = todos.filter(task => task.isActive && !task.isDeleted)
    } else if (status === 'done') {
        displayedTodos = todos.filter(task => !task.isActive && !task.isDeleted)
    } else if (status === 'deleted') {
        displayedTodos = todos.filter(task => task.isDeleted)
    } else {
        displayedTodos = todos.filter(task => !task.isDeleted)
    }
    return (
        <ul style={{listStyle:"none"}}>
            {
                displayedTodos.filter(el => el.text.includes(search)).map((el, indx) => (
                    <Todo setTodos={setTodos} todoObj={el} key={indx} />  
                ))
            }
        </ul>
    )
}
export default TodoList