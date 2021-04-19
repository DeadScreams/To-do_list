// const TaskList = import('./TaskList.js')
// import('./TaskList.js')
// import { TaskList } from './TaskList.js'
// import TaskList from './TaskList.js'
// const TaskList = React.lazy(() => import('./TaskList.js'))

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: props.todos };
    }

    render() {
        return (
            <div className="app">
                <TaskList todos={this.state.todos}/>
            </div>
        )
    }
}

const todos = [
    {id: 1, text: "Learn React!", done: false},
    {id: 2, text: "Learn NodeJS!", done: true},
    {id: 3, text: "Learn to Code!", done: true}
]
// var todos;

// const response = await fetch(new URL('http://localhost:3000/api/tasks'));
// if (response.ok) {
//     todos = await response.json();
// }
// else {
//     alert('HTTP Error: ' + response.status);
// }

var wrapper = document.querySelector("#wrapper");
ReactDOM.render(<App todos={todos} />, wrapper);