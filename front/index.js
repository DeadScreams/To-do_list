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

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.addTask = _this.addTask.bind(_this);
        _this.updateTasks = _this.updateTasks.bind(_this);

        var tasks = [];
        _this.state = { tasks: tasks };

        _this.updateTasks();
        return _this;
    }

    // fetches the tasks from API


    _createClass(App, [{
        key: 'updateTasks',
        value: function updateTasks() {
            var _this2 = this;

            fetch(new URL('http://localhost:3000/api/tasks')).then(function (result) {
                return result.json();
            }).then(function (data) {
                tasks = data.tasks;
                _this2.setState({ tasks: tasks });
                console.log('Received data! ');
                console.log(data);
                // this.state = {tasks: tasks};
            }).catch(function (error) {
                // alert('HTTP Error: ' + error);
                tasks = [];
                console.error(error);
            });
        }
    }, {
        key: 'addTask',
        value: function addTask(text) {
            var _this3 = this;

            // this.setState((prev_state, props) => {
            // prev_state.push({})
            // return {prev_state}
            // })
            alert('This totally should create a task with text \"' + text + '\"');
            fetch(new URL('http://localhost:3000/api/add_task/' + '?text=' + text), {
                method: 'POST'
            }).then(function (response) {
                if (response.ok) {
                    alert('added successfully!');
                    console.log('added task!');
                    _this3.updateTasks();
                } else {
                    console.log('HTTP Error: ' + response.status);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(TaskList, { tasks: this.state.tasks }),
                React.createElement(AddTask, { addTask: this.addTask })
            );
        }
    }]);

    return App;
}(React.Component);

var wrapper = document.querySelector("#wrapper");
var app = React.createElement(App, null);

ReactDOM.render(app, wrapper);