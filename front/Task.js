var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
    _inherits(Task, _React$Component);

    function Task(props) {
        _classCallCheck(this, Task);

        var _this = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));

        _this.state = { todo: props.todo };
        return _this;
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "task" },
                React.createElement(
                    "li",
                    { className: "task-content", key: this.state.todo.id.toString() },
                    React.createElement(
                        "div",
                        { className: "task-text" },
                        this.state.todo.text
                    ),
                    React.createElement(
                        "div",
                        { className: "task-done" },
                        this.state.todo.done ? "(done!)" : "(todo!)"
                    )
                )
            );
        }
    }]);

    return Task;
}(React.Component);

// export default Task;