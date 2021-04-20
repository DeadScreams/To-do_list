class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var classes = [];

        classes.push("task");
        if (this.props.todo.done) {
            classes.push("done");
        }

        classes = classes.join(" ");

        return (
            <li className={classes} key={this.props.todo.id.toString()}>
                <div className="task-content">
                    <div className="task-text">{ this.props.todo.text }</div>
                    <div className="task-done">{ this.props.todo.done ? "(done!)" : "(todo!)"}</div>
                    <div className="task-delete"></div>
                </div>
            </li>
        )
    }
}

// export default Task;