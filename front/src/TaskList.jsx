// const Task = import('./Task.js')
// import('./Task.js')
// import { Task } from './Task.js'
// import Task from './Task.js'
// const Task = React.lazy(() => import('./Task.js'))

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.checkTask = props.checkTask.bind(this);
        this.deleteTask = props.deleteTask.bind(this);
        this.renameTask = props.renameTask.bind(this);
    }

    render() {
        const items = [];

        for(var [index, todo] of this.props.tasks.entries()) {
            items.push(<Task key={todo.id} todo={todo} deleteTask={this.deleteTask} checkTask={this.checkTask} renameTask={this.renameTask} />);
        }

        return <div className="task-list"><ol>{ items }</ol></div>;
    }
}

// export default TaskList;