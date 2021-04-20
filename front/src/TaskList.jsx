// const Task = import('./Task.js')
// import('./Task.js')
// import { Task } from './Task.js'
// import Task from './Task.js'
// const Task = React.lazy(() => import('./Task.js'))

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = [];

        for(var [index, todo] of this.props.tasks.entries()) {
            items.push(<Task key={todo.id} todo={todo} />);
        }

        return <div className="task-list">{ items }</div>;
    }
}

// export default TaskList;