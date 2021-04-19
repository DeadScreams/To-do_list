// const TaskList = import('./TaskList.js')
// import('./TaskList.js')
// import { TaskList } from './TaskList.js'
// import TaskList from './TaskList.js'
// const TaskList = React.lazy(() => import('./TaskList.js'))

class App extends React.Component {
    constructor(props) {
        super(props);

        // var todos = [
        //     {id: 1, text: "Learn React!", done: false},
        //     {id: 2, text: "Learn NodeJS!", done: true},
        //     {id: 3, text: "Learn to Code!", done: true}
        // ]
        // var todos = [];

        // this.state = { todos: todos };

        // fetch(new URL('http://localhost:3000/api/tasks'))
        //     .then((result) => {
        //         return result.json();
        //     })
        //     .then((data) => {
        //         todos = data;
        //         this.setState({ todos: todos }, () => {
        //             console.log('Updated state!');
        //             console.log(this.state);
        //         })
        //         console.log('Received data! ');
        //         console.log(data);
        //         // this.state = {todos: todos};
        //     })
        //     .catch((error) => {
        //         alert('HTTP Error: ' + error);
        //         console.error(error);
        //     })
        (async function() {
            const response = await fetch(new URL('http://localhost:3000/api/tasks'));
            if (response.ok) {
                this.state = { todos: await response.json() };
            }
            else {
                alert('HTTP Error: ' + response.status);
            }
        })()
    }

    render() {
        return (
            <div className="app">
                <TaskList todos={this.state.todos}/>
            </div>
        )
    }
}


var wrapper = document.querySelector("#wrapper");
var app = <App />;

ReactDOM.render(app, wrapper);