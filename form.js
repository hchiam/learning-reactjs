// npm run build
// -> dist/form-minified.js

// <input type="text">, <textarea>, and <select> all end up working very similarly:
// all using `value` attribute (to put into state) to implement a controlled component.

// Controlled components (as below) are usually recommended (https://reactjs.org/docs/forms.html),
// but you may want to consider UNcontrolled components: https://reactjs.org/docs/uncontrolled-components.html

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    // This binding is necessary to make `this` work in the respective callbacks
    // More info: https://reactjs.org/docs/handling-events.html
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    // This binding is necessary to make `this` work in the respective callbacks
    // More info: https://reactjs.org/docs/handling-events.html
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          {/* in React, textarea uses `value` so it's similar to <input> tag: */}
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };

    // This binding is necessary to make `this` work in the respective callbacks
    // More info: https://reactjs.org/docs/handling-events.html
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <NameForm />
    <EssayForm />
    <FlavorForm />
  </div>,
  document.getElementById('root')
);
