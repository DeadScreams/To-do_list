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
        _this.deleteTask = _this.deleteTask.bind(_this);
        _this.checkTask = _this.checkTask.bind(_this);
        _this.findTask = _this.findTask.bind(_this);

        var tasks = [];
        _this.state = { tasks: tasks };

        _this.updateTasks();
        return _this;
    }

    _createClass(App, [{
        key: 'findTask',
        value: function findTask(id) {
            return this.state.tasks.find(function (task) {
                return task.id === id;
            });
        }

        // fetches the tasks from API

    }, {
        key: 'updateTasks',
        value: function updateTasks() {
            var _this2 = this;

            fetch(new URL('http://localhost:3000/api/tasks')).then(function (result) {
                return result.json();
            }).then(function (data) {
                var tasks = data.tasks;
                _this2.setState({ tasks: tasks });
                console.log('Received data! ');
                console.log(data);
            }).catch(function (error) {
                _this2.setState({ tasks: [] });
                console.error(error);
            });
        }
    }, {
        key: 'addTask',
        value: function addTask(text) {
            var _this3 = this;

            // alert('This totally should create a task with text \"'+text+'\"');
            fetch(new URL('http://localhost:3000/api/add_task/' + '?text=' + text), {
                method: 'POST'
            }).then(function (response) {
                if (response.ok) {
                    console.log('Added Task!');
                    _this3.updateTasks();
                } else {
                    console.log('HTTP Error: ' + response.status);
                }
            });
        }
    }, {
        key: 'deleteTask',
        value: function deleteTask(id) {
            var _this4 = this;

            // alert('This totally should delete a task with id #' + id);
            fetch(new URL('http://localhost:3000/api/delete_task/' + id), {
                method: 'POST'
            }).then(function (response) {
                if (response.ok) {
                    console.log('Removed Task!');
                    _this4.updateTasks();
                } else {
                    console.log('HTTP Error: ' + response.status);
                }
            });
        }
    }, {
        key: 'checkTask',
        value: function checkTask(id) {
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
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(AddTask, { addTask: this.addTask }),
                React.createElement(TaskList, { tasks: this.state.tasks, deleteTask: this.deleteTask, checkTask: this.checkTask })
            );
        }
    }]);

    return App;
}(React.Component);

var wrapper = document.querySelector("#wrapper");
var app = React.createElement(App, null);

ReactDOM.render(app, wrapper);