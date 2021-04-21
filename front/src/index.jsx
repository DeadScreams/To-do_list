// const TaskList = import('./TaskList.js')
// import('./TaskList.js')
// import { TaskList } from './TaskList.js'
// import TaskList from './TaskList.js'
// const TaskList = React.lazy(() => import('./TaskList.js'))

const ip = "192.168.43.37";
const port = "3000";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.updateTasks = this.updateTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.checkTask = this.checkTask.bind(this);
        this.renameTask = this.renameTask.bind(this);
        this.findTask = this.findTask.bind(this);

        this.state = { tasks: [] };

        this.updateTasks();

        this.interval = null;
    }

    // fetch the tasks every 10 sec
    componentDidMount() {
        this.interval = setInterval(() => this.updateTasks(), 10000);
    }
    // clear the interval after yourself
    componentWillUnmount() {
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
    }

    findTask(id) {
        return this.state.tasks.find(task => task.id === id);
    }

    // fetches the tasks from API
    updateTasks() {
        fetch(new URL(`http://${ip}:${port}/api/tasks`))
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                var tasks = data.tasks;
                this.setState({ tasks: tasks })
                console.log('Received data! ');
                console.log(data);
            })
            .catch((error) => {
                this.setState({ tasks: [] })
                console.error(error);
            })
    }

    addTask(text) {
        // alert('This totally should create a task with text \"'+text+'\"');
        fetch(new URL(`http://${ip}:${port}/api/add_task/` + '?text='+text), {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                console.log('Added Task!');
                this.updateTasks();
            }
            else {
                console.log('HTTP Error: ' + response.status);
            }
        })
    }

    deleteTask(id) {
        // alert('This totally should delete a task with id #' + id);
        fetch(new URL(`http://${ip}:${port}/api/delete_task/` + id), {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                console.log('Removed Task!');
                this.updateTasks();
            }
            else {
                console.log('HTTP Error: ' + response.status);
            }
        })
    }

    checkTask(id) {
        var task = this.findTask(id);
        // alert('This should totally check the task id#'+id);
        task.done = !task.done;
        this.setState({ tasks: this.state.tasks });

        fetch(new URL(`http://${ip}:${port}/api/update_task/` + id+'/?text=' + task.text + '&done=' + task.done), {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                console.log('Checked Task!');
                this.updateTasks();
            }
            else {
                console.log('HTTP Error: ' + response.status);
            }
        })
    }

    renameTask(id, new_text) {
        var task = this.findTask(id);
        task.text = new_text;
        this.setState({ tasks: this.state.tasks });

        fetch(new URL(`http://${ip}:${port}/api/update_task/` + id+'/?text=' + task.text + '&done=' + task.done), {
            method: 'POST'
        }).then((response) => {
            if (response.ok) {
                console.log('Renamed Task!');
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
                <AddTask addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} checkTask={this.checkTask} renameTask={this.renameTask} />
            </div>
        )
    }
}


var wrapper = document.querySelector("#wrapper");
var app = <App />;

ReactDOM.render(app, wrapper);