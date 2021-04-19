class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo: props.todo };
    }

    render() {
        return (
            <div className="task">
                <li className="task-content" key={this.state.todo.id.toString()}>
                    <div className="task-text">{ this.state.todo.text }</div>
                    <div className="task-done">{ this.state.todo.done ? "(done!)" : "(todo!)"}</div>
                </li>
            </div>
        )
    }
}

// export default Task;