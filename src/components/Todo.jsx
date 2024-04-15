import { useState } from "react";
import './Todo.css'
import Button from './Button'

const Todo = ({ setTodos, todoObj }) => {
  const [editId, setEditId] = useState(null)
  const [editInputText, setEditInputText] = useState('')

  const doneHandle = (id) => {
    setTodos((prev) => prev.map(todoObj => todoObj.id === id ? { ...todoObj, isActive: !todoObj.isActive } : todoObj))
  }

  const deleteHandle = (id) => {
    setTodos((prev) => prev.map(todoObj => todoObj.id === id ? { ...todoObj, isDeleted: true } : todoObj))
  }

  const editHandle = (el) => {
    setEditId(el.id)
    setEditInputText(el.text)
  }

  const saveEditHandle = () => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === editId) {
        return { ...todo, text: editInputText };
      }
      return todo;
    }));
    setEditInputText('');
    setEditId(null);
  }

  const restoreTask = (id) => {
    setTodos((prev) => {
      return prev.map(task => task.id === id ? { ...task, isDeleted: false } : task)
    })
  }

  const hardDelete = (id) => {
    setTodos((prev) => prev.filter(task => task.id !== id))
  }


  return (
    <li>
      {editId === todoObj.id ? (
        <input
          type="text"
          value={editInputText}
          autoFocus
          onFocus={(e) => e.currentTarget.select()}
          onChange={(e) => setEditInputText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${todoObj.isActive ? "" : "done"}`}>{todoObj.text}</span>
      )}
      <div>
        {todoObj.isDeleted ? (
          <>
            <Button onClick={() => restoreTask(todoObj.id)}>restore</Button>
            <Button onClick={() => hardDelete(todoObj.id)}>hard delete</Button>
          </>
        ) : (
          <>
            {todoObj.isActive ?
              <Button type="button" onClick={() => doneHandle(todoObj.id)}>done</Button>
              :
              <Button type="button" onClick={() => doneHandle(todoObj.id)}>activate</Button>
            }
            {editId === todoObj.id ?
              <Button type="button" onClick={() => saveEditHandle(todoObj)}>save</Button>
              :
              <Button type="button" onClick={() => editHandle(todoObj)}>edit</Button>
            }
            <Button type="button" onClick={() => deleteHandle(todoObj.id)}>delete</Button>
          </>
        )}

      </div>
    </li>
  );
}
export default Todo