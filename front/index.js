var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const TaskList = import('./TaskList.js')
// import('./TaskList.js')
// import { TaskList } from './TaskList.js'
// import TaskList from './TaskList.js'
// const TaskList = React.lazy(() => import('./TaskList.js'))

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        // var todos = [
        //     {id: 1, text: "Learn React!", done: false},
        //     {id: 2, text: "Learn NodeJS!", done: true},
        //     {id: 3, text: "Learn to Code!", done: true}
        // ]
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        var todos = [];

        _this.state = { todos: todos };

        fetch(new URL('http://localhost:3000/api/tasks')).then(function (result) {
            return result.json();
        }).then(function (data) {
            todos = data.tasks;
            _this.setState({ todos: todos });
            console.log('Received data! ');
            console.log(data);
            // this.state = {todos: todos};
        }).catch(function (error) {
            alert('HTTP Error: ' + error);
            console.error(error);
        });
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            // const items = [];
            // this.state.todos.forEach((todo) => {
            //     items.push(<p key={todo.id}>{todo.text}</p>);
            // })

            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(TaskList, { todos: this.state.todos })
            );
        }
    }]);

    return App;
}(React.Component);

var wrapper = document.querySelector("#wrapper");
var app = React.createElement(App, null);

ReactDOM.render(app, wrapper);