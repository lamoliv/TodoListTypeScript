

function TodoTable(props: any) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Priority</th>
                    </tr>
                    {
                        props.todos.map((todo: any, index: number) =>
                            <tr key={index}>
                                <td>{todo.date}</td><td>{todo.desc}</td><td>{todo.priority}</td>
                                <td><button id="btn" onClick={() => { props.removeTodo(index) }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;