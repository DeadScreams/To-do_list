var a = 1;
// var b = <p>Blah</p>;

class TestElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "hahaha" };
    }

    render() {
        return (
            <div className="test-element">
                <p>{this.state.text}</p>
                <button onClick={() => { this.setState({ text: "no" }) }}></button>
            </div>
        )
    }
}

var element = document.querySelector("#test");
ReactDOM.render(<TestElement />, element);