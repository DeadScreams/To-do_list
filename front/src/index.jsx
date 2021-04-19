class TestElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "hahaha" };
    }

    render() {
        return (
            <div className="test-element">
                <p>{this.state.text}</p>
                <button onClick={() => { this.setState({ text: "no" }) }}>Click me!</button>
            </div>
        )
    }
}

var element = document.querySelector("#wrapper");
ReactDOM.render(<TestElement />, element);