class Task extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.props.deleteTask.bind(this);
        this.checkTask = this.props.checkTask.bind(this);
    }

    render() {
        var classes = [];

        classes.push("task");
        if (this.props.todo.done) {
            classes.push("done");
        }

        classes = classes.join(" ");

        return (
            <li className={classes} key={this.props.todo.id}>
                <div className="task-content">
                    <div className="task-text">{ this.props.todo.text }</div>
                    <div className="task-done">{ this.props.todo.done ? "(done!)" : "(todo!)"}</div>
                    <div className="task-check">
                        <button className="btn-check" onClick={() => { this.checkTask(this.props.todo.id) }}>✓</button>
                    </div>
                    <div className="task-delete">
                        <button className="btn-delete" onClick={() => { this.deleteTask(this.props.todo.id) }}>X</button>
                    </div>
                </div>
            </li>
        )
    }
}

// export default Task;