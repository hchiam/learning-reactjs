# Learning React.js

Create components in JavaScript using React. Conceptually, [rendering logic and other UI logic are closely coupled](https://reactjs.org/docs/introducing-jsx.html); separate concerns by components instead of by HTML/JS/CSS. Composition > inheritance. And top-down data flow (but children can change other children/parent's state by calling shared parent's functions that are passed down to them via immutable props).

Just one of the things I'm learning. <https://github.com/hchiam/learning> and <https://github.com/hchiam/learning-frameworks>

**Update:** You can [create a React web app by running one command](https://github.com/hchiam/create-react-app): `npx create-react-app my-app` (Update update: maybe use [nx](https://github.com/hchiam/learning-nx) instead). Or you can use Yeoman generators like [this](https://www.npmjs.com/package/generator-create-redux-app) or [this](https://www.npmjs.com/package/generator-rn-toolbox) or try out a [RealWorld spec app](https://github.com/gothinkster/react-redux-realworld-example-app). Or use [Next.js](https://github.com/hchiam/learning-nextjs).

[2020 React cheatsheet (with code examples)](https://www.freecodecamp.org/news/the-react-cheatsheet-for-2020/)

## OLD NOTES

<details>

<summary>click to expand/collapse</summary>

### tutorial 0:

http://codepen.io/gaearon/pen/ZpvBNJ

Shortest React example:

`ReactDOM.render( <h1>Hello, world!</h1>, document.getElementById('root') );`

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

If you do use JSX, then: JSX --(compile)--> JS (for browser to interpret)

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

</details>

<hr>


<hr>

## NEW NOTES

<details>

<summary>click to expand/collapse</summary>

(To try my examples, `npm install && npm run build` and _then_ open all the html files with `open *.html`.)

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
const listItems = numbers.map((number) => <li>{number}</li>);
ReactDOM.render(
  <ul>{listItems}</ul>, // <ul> an array of <li>#</li>'s
  document.getElementById("root")
);
```

### Design thinking process with React

<https://reactjs.org/docs/thinking-in-react.html>

- Good to re-read the above link for details.
- But general overview:

  0. [mock/boxes](https://reactjs.org/docs/thinking-in-react.html#start-with-a-mock)
  1. [hierarchy/"tabs"](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)
  2. [static version](https://reactjs.org/docs/thinking-in-react.html#step-2-build-a-static-version-in-react) (NO interactivity, so think about state/props later)
  3. [minimal state representation](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) = {not passed-in prop, changes, not computable} -> (compute the rest)
  4. [where state should live](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live) ("shared" state? may need to be in parent -> pass down state and callback as props to children)
  5. [add inverse data flow](https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow), i.e. pass down state and callbacks as props to children, as identified in previous steps.

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
    <div className={"FancyBorder FancyBorder-" + props.color}>
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
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
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

### Higher-order components in React

<https://css-tricks.com/what-are-higher-order-components-in-react/>

```js
// higher-order component: takes a component and returns a component (in this case, with modified props)
const hoc = (WrappedComponent) => (props) => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  );
};

// component to put into the “hoc”:
const Username = (props) => <div>{props.children}</div>;

// “hoc” being created:
const UpperCaseUsername = hoc(Username);

// “hoc” being used:
const App = () => (
  <div>
    <UpperCaseUsername>Kingsley</UpperCaseUsername>
  </div>
);
```

### React hooks

May replace higher-order components and nesting.

<https://css-tricks.com/intro-to-react-hooks/>

```js
componentDidMount() {
  // A
}

componentWillUnmount() {
  // B
}
```

[is the same as](https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks/53465182#53465182):

```js
useEffect(() => {
  // A

  return () => {
    // B
  };
}, []);
```

### Helpful example of adding data to redux state container

<https://github.com/hchiam/react-jexcel-redux/commit/90db044627780ed6262f5e29bb61a24390a4d4b3>

### Auth

Easy solution: <https://github.com/Swizec/useAuth>

### Another mini-example

<https://github.com/hchiam/learning-react-2dnote>

### Example of React and TDD

<https://github.com/hchiam/learning-react-tdd>

### Other related tools

- [Jest](https://github.com/hchiam/learning-jest)
- [Redux](https://github.com/hchiam/learning-redux)
- [React Router](https://github.com/hchiam/learning-react-router)
- [React Native](https://github.com/hchiam/learning-react-native)
- [React + Apollo + GraphQL](https://github.com/hchiam/learning-react-apollo)
- [React + Firestore](https://github.com/hchiam/learning-firestore)
- [React Hook Form](https://github.com/hchiam/learning-react-hook-form)

### Further reading on state organization: "The 5 Types Of React Application State"

<http://jamesknelson.com/5-types-react-application-state>

1. Data
2. Communication
3. Control
4. Session
5. Location

### When React Re-renders

Worth a read: <https://www.joshwcomeau.com/react/why-react-re-renders> but for a quick summary/reminder, see the interactive graphs, but here are my key take-aways:

- [when component re-renders, it re-renders all its children by default](https://www.joshwcomeau.com/react/why-react-re-renders/#:~:text=Here's%20an-,interactive%20graph,-that%20shows%20this),
  - [_even if they aren't actually affected by the change in props **by default**_](https://www.joshwcomeau.com/react/why-react-re-renders/#:~:text=It%20doesn't,er%2C%20not%20quite.),
    - but [with `React.memo` you can create pure-components that let you avoid/minimize that (well, certain re-renders) by diffing props instead of creating the entire component to then find diffs in that](https://www.joshwcomeau.com/react/why-react-re-renders/#:~:text=let's%20suppose%20i%20wrap%20both%20bigcountnumber%20and%20decoration%20with%20the%20react.memo%20helper.%20here's%20how%20this%20would%20affect%20the%20re-renders%3A)
    - "The React team is actively investigating whether it's possible to “auto-memoize” code during the compile step. It's still in the research phase, but early experimentation appears promising." (more info: https://www.youtube.com/watch?v=lGEMwh32soc)

### exceptions to camelCasing: `data-...` and ARIA

Examples:

```jsx
<button
  data-custom-attribuet="some-value"
  aria-label="Close dialog"
>
```

Remember `class` is `className` and `for` is `htmlFor` because JSX will inject JS into slots!

### convert HTML to JSX

https://transform.tools/html-to-jsx

JSX looks like a template language, but JSX transpiles to JS and then HTML which then is more dynamic, and doesn't invent a totally different language, and can leverage existing JS.

</details>

### More to learn

<https://github.com/hchiam/learning-react-error-boundaries>

SSR (Server Side Rendering) and React Server Components: https://www.joshwcomeau.com/react/server-components/

### More miscellaneous notes

- React Scan to get render hints etc to dig into performance sinks: https://www.youtube.com/watch?v=ROKRTZ_xCgo
- avoid interacting with the DOM directly, and use React's abstraction to let React handle DOM manipulation, cleanup, and optimization for you
    - (e.g., don't use `querySelector`)
    - (e.g., replace jQuery way of doing things with React conventions)
- React `key` like in `<div key={valueThatChanges} className={styles.animate}>` can be used to make the `div` element re-render, and hence also re-run any animation on it set by class `.animate`
    - btw, `key` is a reserved keyword in React, and looks like a component prop, but is really like an element ID (`key` won't show up in the component's `prop`s)
    - `key` is better off as = some unique ID, not simply as array index (`key` = array index can run into some weird bugs)
    - `key` must be top-level element in list
    - `key` only has to be unique within a list
- React `useEffect` is meant for synchronizing React with something outside of React (e.g. API call).
- [Motion (previously Framer Motion)](https://github.com/motiondivision/motion) has default springy/natural animations
    - code example:
      ```js
      import { motion } from 'framer-motion';
      function SomeComponent() {
          return <motion.div
              animate={{ y: 10 }}
              initial={false} // set false so it doesn't include enter animation on load
              transition={{ // not required
                  type: 'spring', // this is the default, and so i don't really need transition here at all
                  damping: 25, // i like the spring default, so i don't need this either
                  stiffness: 200, // i like springy default, so i don't need this either
              }}
          />;
      }
      ```
    - use `as` prop to combine Motion with styled-components:
      ```js
      const RedButton = styled.button`
          color: red;
      `;
      <RedButton as={motion.button}>
      ```
      or composition by wrapping the `motion.[...]` in a `styled(...)`:
      ```js
      const RedButton = styled(motion.button)`
          color: red;
      `;
      ```
- when to use Higher-Order-Components (HOCs) vs when to use Hooks in React: https://www.patterns.dev/react/hoc-pattern/
    - HOCs:
        - repeated UNcustomized when used by each component
        - can work standalone
    - Hooks:
        - behaviour needs to be customized when used by each component
        - not spread throughout the app, only a few components use it
        - it adds many properties to a component
    - watch out for overriding/colliding prop names! consider merging with something like:
        - `const style = { margin: '1rem', ...props.style };`
- hooks > classes: https://www.patterns.dev/react/hooks-pattern/
- render props pattern: https://www.patterns.dev/react/render-props-pattern/ (see pros and cons section)
    - `props.render(data)` so you can pass HTML as a callback to a component's props, and have it render with its own data
        - with `<ComponentName render={(value) => (<SomethingElse value={value}/>)}/>`
    - or `props.children(data)`
        - with `<ComponentName>{(value) => (<SomethingElse value={value}/>)}<ComponentName/>`
    - good reusability and able to share data between components without "lifting" state
- note: `count && <element>` could render `0` if count is 0
    - so it should instead be: `count > 0 && <element>`
