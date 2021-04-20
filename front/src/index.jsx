// const TaskList = import('./TaskList.js')
// import('./TaskList.js')
// import { TaskList } from './TaskList.js'
// import TaskList from './TaskList.js'
// const TaskList = React.lazy(() => import('./TaskList.js'))

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.updateTasks = this.updateTasks.bind(this);

        var tasks = [];
        this.state = { tasks: tasks };

        this.updateTasks();
    }

    // fetches the tasks from API
    updateTasks() {
        fetch(new URL('http://localhost:3000/api/tasks'))
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                tasks = data.tasks;
                this.setState({ tasks: tasks })
                console.log('Received data! ');
                console.log(data);
                // this.state = {tasks: tasks};
            })
            .catch((error) => {
                // alert('HTTP Error: ' + error);
                tasks = [];
                console.error(error);
            })
    }

    addTask(text) {
        // this.setState((prev_state, props) => {
            // prev_state.push({})
            // return {prev_state}
        // })
        alert('This totally should create a task with text \"'+text+'\"');
        fetch(new URL('http://localhost:3000/api/add_task/' + '?text='+text), {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                alert('added successfully!');
                console.log('added task!');
                this.updateTasks();
            }
            else {
                console.log('HTTP Error: ' + response.status);
            }
        })
    }

    render() {
        return (
            <div className="app">
                <TaskList tasks={this.state.tasks}/>
                <AddTask addTask={this.addTask} />
            </div>
        )
    }
}


var wrapper = document.querySelector("#wrapper");
var app = <App />;

ReactDOM.render(app, wrapper);