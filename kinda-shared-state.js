// npm run build
// -> dist/kinda-shared-state-minified.js

// There should be a single “source of truth” for any data that changes.

// But sometimes multiple components need to reflect the same changing data
// -> so share state up to their closest common ancestor,
// -> and pass state var and callback to children as props to handle in children.
// (NOTE: you can pass functions as props too!!!)
// (-> this lets children call a parent function and change parent state, which passes down to children.)

// Top-down data flow: more boilerplate but easier to track bugs.

// parent:
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleChangeF = this.handleChangeF.bind(this);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleChangeC(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleChangeF(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const c = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature;
    const f = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={c}
          onTemperatureChange={this.handleChangeC} />
        <TemperatureInput
          scale="f"
          temperature={f}
          onTemperatureChange={this.handleChangeF} />
        <BoilingVerdict
          celsius={parseFloat(c)} />
      </div>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

// each child: (one for celsius, one for fahrenheit)
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) { // when child is changed, trigger change in parent:
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() { // parent state passed to child as prop:
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;

    const scale = this.props.scale; // <----
    return (
      <fieldset>
        {/* note scaleNames: */}
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// another separate child
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// helper functions:

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  // example use: tryConvert('10.22', toFahrenheit)
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
