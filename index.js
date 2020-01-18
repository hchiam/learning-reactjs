// npm run build
// -> dist/index.js

class Clock extends React.Component {
  constructor(props) { // 1
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() { // 3
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // 5
    clearInterval(this.timerID);
  }

  tick() { // 4 (tick is a custom method)
    this.setState({ // here's how to update state!
      date: new Date() // (this does not erase other state variables, it only merges in updates to this.state.date)
    });
    // // Wrong: (because this.props and this.state are asynchronously updated)
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // // Correct: (because of reason mentioned above)
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
  }

  render() { // 2 (updates diff when this.setState is called)
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // More info: https://reactjs.org/docs/handling-events.html
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => // note: NO "{" here!
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <div>
    <Clock />
    <Toggle />
    <NumberList numbers={numbers} />
  </div>,
  document.getElementById('root')
);
