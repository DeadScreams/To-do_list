import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var response;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return fetch(new URL('http://localhost:3000/api/tasks'));

                        case 2:
                            response = _context.sent;

                            if (!response.ok) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 6;
                            return response.json();

                        case 6:
                            _context.t0 = _context.sent;
                            this.state = {
                                todos: _context.t0
                            };
                            _context.next = 11;
                            break;

                        case 10:
                            alert('HTTP Error: ' + response.status);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }))();
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
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