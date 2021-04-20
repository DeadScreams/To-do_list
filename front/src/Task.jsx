class Task extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.props.deleteTask.bind(this);
        this.checkTask = this.props.checkTask.bind(this);
        this.renameTask = this.props.renameTask.bind(this);

        this.handleRename = this.handleRename.bind(this);
        this.handlePencil = this.handlePencil.bind(this);

        this.state = { editing: false, text: '' };
    }

    handleRename(event) {
        this.setState({ text: event.target.value });
    }

    handlePencil() { // when clicked on pencil
        if (this.state.editing) { // stop editing
            this.renameTask(this.props.todo.id, this.state.text);
            this.setState({editing: false});
        }
        else { // start editing
            this.setState({ editing: true, text: this.props.todo.text });
        }
    }

    render() {
        var task_classes = [];

        task_classes.push("task");
        if (this.props.todo.done) {
            task_classes.push("done");
        }

        task_classes = task_classes.join(" ");

        return (
            <li className={task_classes} key={this.props.todo.id}>
                <div className="task-content">
                <div className="task-text">{
                        this.state.editing ? <input type="text" value={this.state.text} onChange={this.handleRename}></input>
                        : this.props.todo.text
                    }</div>
                <div className="task-done">{ this.props.todo.done ? "(done!)" : "(todo!)"}</div>
                <div className="task-rename">
                    <button className="btn-rename" onClick={this.handlePencil}>✎</button>
                </div>
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