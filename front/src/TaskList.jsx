// const Task = import('./Task.js')
// import('./Task.js')
// import { Task } from './Task.js'
// import Task from './Task.js'
// const Task = React.lazy(() => import('./Task.js'))

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: props.todos};
    }

    render() {
        const items = [];

        for(var [index, todo] of this.state.todos.entries()) {
            // items.push(<li key={"todo#"+index}>{value}</li>)
            items.push(<Task key={todo.id} todo={todo} />);
        }

        return <div className="task-list">{ items }</div>;
    }
}

// export default TaskList;