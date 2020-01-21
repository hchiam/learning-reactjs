# Learning React.js

Create components in JavaScript using React. Conceptually, [rendering logic and other UI logic are closely coupled](https://reactjs.org/docs/introducing-jsx.html). Composition > inheritance. And top-down data flow (but children can change other children/parent's state by calling shared parent's functions that are passed down to them via immutable props).

Just one of the things I'm learning. https://github.com/hchiam/learning

(Update: you can [create a React web app by running one command](https://github.com/hchiam/create-react-app) or use Yeoman generators like [this](https://www.npmjs.com/package/generator-create-redux-app) or [this](https://www.npmjs.com/package/generator-rn-toolbox).)

<hr>

## NEW NOTES

(To try my examples, `npm run build` and _then_ open the html files.)

<https://reactjs.org/docs/hello-world.html>

<https://reactjs.org/tutorial/tutorial.html> -> <https://codepen.io/hchiam/pen/BayOeZo?editors=0010>

<https://www.freecodecamp.org/learn/front-end-libraries/react>

### React developer tools

Firefox: <https://addons.mozilla.org/en-US/firefox/addon/react-devtools> -> open dev tools -> Components tab

Chrome: <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi>

### Coming from AngularJS?

`ng-if`? -> JavaScript `if`/ternary or embedded shorthand `{isTrue && <p>show this</p>}` or `return null`

`ng-for`? -> JavaScript loop or `map` (for example: `numbers.map((n) => <li>{n}</li>);`)

You can even do this:
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>, // <ul> an array of <li>#</li>'s
  document.getElementById('root')
);
```

### Design thinking process with React

<https://reactjs.org/docs/thinking-in-react.html>

- Good to re-read the above link for details.
- But general overview:

  0) [mock/boxes](https://reactjs.org/docs/thinking-in-react.html#start-with-a-mock)
  1) [hierarchy/"tabs"](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)
  2) [static version](https://reactjs.org/docs/thinking-in-react.html#step-2-build-a-static-version-in-react) (NO interactivity, so think about state/props later)
  3) [minimal state representation](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) = {not passed-in prop, changes, not computable} -> (compute the rest)
  4) [where state should live](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live) ("shared" state? may need to be in parent -> pass down state and callback as props to children)
  5) [add inverse data flow](https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow), i.e. pass down state and callbacks as props to children, as identified in previous steps.

### Passing arguments to event handlers

```html
<!-- parameters will be extraParameter and e (implicit with bind) -->
<button onClick={(e) => this.handleClick(extraParameter, e)}>Do something</button>
<button onClick={this.handleClick.bind(this, extraParameter)}>Do something</button>
```

### Passing children elements

Special prop `props.children` lets you do this:

```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <p>Something here.</p>
      {props.children} {/* you can insert JSX here! */}
      <p>Something else here.</p>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">

      {/* you can insert JSX here! */}
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
      {/* you can insert JSX here! */}

    </FancyBorder>
  );
}
```

If you want custom "holes" in a component, you can do that too:

```js
function SplitPane(props) {
  // custom props let you control where the JSX "holes" are!
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left} {/* you can insert JSX here! */}
      </div>
      <div className="SplitPane-right">
        {props.right} {/* you can insert JSX here! */}
      </div>
    </div>
  );
}

function App() {
  return (
    {/* custom props let you control where the JSX "holes" are! */}
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
      />
  );
}
```

### Other related tools

- [Jest](https://github.com/hchiam/learning-jest)
- [Redux](https://github.com/hchiam/learning-redux)

<hr>

## OLD NOTES

### tutorial 0:
http://codepen.io/gaearon/pen/ZpvBNJ

Shortest React example:

`
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
`

### tutorial 0.5:
http://stackoverflow.com/questions/34737898/a-simple-hello-world-in-react-js-not-working

https://codepen.io/hchiam/pen/jmxVzV

### tutorial 1:
[LearnCode.academy tutorial on YouTube](https://www.youtube.com/watch?v=MhkGQAoc7bc)

### tutorial 2:
http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/

and

https://facebook.github.io/react/docs/hello-world.html

Facebook provides a direct link to its React JS file (and its React object and its methods) that you can embed in your HTML file:

    <script src="http://fb.me/react-0.10.0.min.js"></script>

Then you can call `React.createClass()` with an object of options and methods. 

It's recommended (but not required) to use the JSX dialect of JS (JavaScript) to write React web apps.

If you do use JSX, then:  JSX --(compile)--> JS (for browser to interpret)

### tutorial 3:

FCC: https://github.com/hchiam/chat-app-fcc-react-redux

### More of My Own Reworked Examples:

http://codepen.io/hchiam/pen/LymLzP (vs a pure html version: http://codepen.io/hchiam/pen/jmxVzV)

http://codepen.io/hchiam/pen/ybjXPE?editors=1010

#### Reworked Forks:

http://codepen.io/hchiam/pen/YVLrBb

http://codepen.io/hchiam/pen/rmvGgd

### All My React Codepens (Forks Included):

https://codepen.io/search/pens/?q=react&limit=hchiam&show_forks=true

<hr>
