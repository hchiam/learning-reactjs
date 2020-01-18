# Learning React.js

Create components in JavaScript using React. Conceptually, [rendering logic and other UI logic are closely coupled](https://reactjs.org/docs/introducing-jsx.html).

Just one of the things I'm learning. https://github.com/hchiam/learning

(Update: you can [create a React web app by running one command](https://github.com/hchiam/create-react-app).)

## New

<https://reactjs.org/docs/hello-world.html>

<https://reactjs.org/tutorial/tutorial.html>

- <https://codepen.io/hchiam/pen/BayOeZo?editors=0010>

<https://www.freecodecamp.org/learn/front-end-libraries/react>

### React developer tools

Firefox: <https://addons.mozilla.org/en-US/firefox/addon/react-devtools>

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

### Passing arguments to event handlers

```html
<!-- parameters will be extraParameter and e (implicit with bind) -->
<button onClick={(e) => this.handleClick(extraParameter, e)}>Do something</button>
<button onClick={this.handleClick.bind(this, extraParameter)}>Do something</button>
```

## Old

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
