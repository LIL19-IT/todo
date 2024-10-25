import { useState } from "react";

export function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (!input.trim()) {
            return;
        }

        addTodo(input);
        setInput('');
    }

    return (
        <form className='AddTodo' onSubmit={submitHandler}>
            <input type="text" placeholder="add your todo..." value={input} onChange={e => setInput(e.target.value)} />
            <input type="submit" value="add" />
        </form>
    )
}
