class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: 'Learn to code' };

        this.addTask = this.props.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var text = event.target.value;
        this.setState({ text: text });
    }

    handleSubmit() {
        var text = this.state.text.trim();
        if (text != '') {
            this.addTask(text);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <div className="add-tasks">
                <input className="txt-add" type="text" value={this.state.text} onChange={this.handleChange} />
                <button className="btn-add" onClick={this.handleSubmit}>+</button>
            </div>
        )
    }
}