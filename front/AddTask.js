var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTask = function (_React$Component) {
    _inherits(AddTask, _React$Component);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        var _this = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

        _this.state = { text: 'Learn to code' };

        _this.addTask = _this.props.addTask.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(AddTask, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var text = event.target.value;
            this.setState({ text: text });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var text = this.state.text.trim();
            if (text != '') {
                this.addTask(text);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'add-tasks' },
                React.createElement('input', { type: 'text', value: this.state.text, onChange: this.handleChange }),
                React.createElement(
                    'button',
                    { onClick: this.handleSubmit },
                    'Add task!'
                )
            );
        }
    }]);

    return AddTask;
}(React.Component);