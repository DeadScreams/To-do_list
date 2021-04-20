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
        this.deleteTask = this.deleteTask.bind(this);
        this.checkTask = this.checkTask.bind(this);
        this.findTask = this.findTask.bind(this);

        var tasks = [];
        this.state = { tasks: tasks };

        this.updateTasks();
    }

    findTask(id) {
        return this.state.tasks.find(task => task.id === id);
    }

    // fetches the tasks from API
    updateTasks() {
        fetch(new URL('http://localhost:3000/api/tasks'))
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
        fetch(new URL('http://localhost:3000/api/add_task/' + '?text='+text), {
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
        fetch(new URL('http://localhost:3000/api/delete_task/' + id), {
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
        var text = task.text;
        var done = task.done;

        // alert('This should totally check the task id#'+id);
        task.done = !task.done;
        this.setState({ tasks: this.state.tasks });

        // this.setState((prev_state, props) => {
        //     return prev_state.map((task, i) => {
        //         if (task.id === id) {
        //             task.done = !task.done;
        //         }
        //         return task;
        //     })
        // });

        // fetch(new URL('http://localhost:3000/api/update_task/' + id+'/?text=' + text + '&done=' + done), {
        //     method: 'POST'
        // }).then((response) => {
        //     if (response.ok) {
        //         console.log('Checked Task!');
        //         this.updateTasks();
        //     }
        //     else {
        //         console.log('HTTP Error: ' + response.status);
        //     }
        // })
    }

    render() {
        return (
            <div className="app">
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} checkTask={this.checkTask} />
                <AddTask addTask={this.addTask} />
            </div>
        )
    }
}


var wrapper = document.querySelector("#wrapper");
var app = <App />;

ReactDOM.render(app, wrapper);