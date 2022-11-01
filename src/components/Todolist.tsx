import React, { useState } from 'react';
import TodoTable from './Todotable';
// import { Todo } from './Todotable';

interface ITodo {
    desc: string,
    date: string,
    priority: string
}

function Todolist(): JSX.Element {
    const [todo, setTodo] = useState<ITodo>({} as ITodo);
    const [todos, setTodos] = useState([] as any);

    const addTodo = (event: any) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const removeTodo = (index: number) => {
        setTodos(todos.filter((todo: any, i: number) => {
            return i !== index
        }),
        )
    }

    return (
        <>
            <div id="container">
                <p id="title">TypeScript todo:</p>
                <form onSubmit={addTodo}>
                    <label>Description:</label>
                    <input type="text" name="desc" value={todo.desc}
                        onChange={changed}
                    />
                    <label>Date: </label>
                    <input type="date" name="date" value={todo.date}
                        onChange={changed}
                    />
                    <label>Priority: </label>
                    <input type="priority" name="priority" value={todo.priority}
                        onChange={changed}
                    />
                </form>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoTable todos={todos} removeTodo={removeTodo} />
        </>

    );
}

export default Todolist;

