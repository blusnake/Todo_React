import { useState } from "react";
import './AddForm.css'

const AddForm = ({ todos, setTodos }) => {
    const [inputText, setInputText] = useState('')
    const todoAddHandle = (e) => {
        e.preventDefault();
        if(inputText.trim() !== '') {
            setTodos((prev) => [
                ...prev,
                {
                    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
                    text: inputText,
                    isActive: true,
                    isDeleted: false,
                },
            ]);
            setInputText("");
        }
    };
    return (
        <form className="addForm" onSubmit={todoAddHandle}>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit">add</button>
        </form>
    )
}
export default AddForm