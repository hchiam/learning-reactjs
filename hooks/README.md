# React hooks

([14-minute YouTube summary](https://www.youtube.com/watch?v=TNhaISOUy6Q))

hooks > classes: https://www.patterns.dev/react/hooks-pattern/

<https://www.smashingmagazine.com/2020/04/react-hooks-api-guide> + notes from elsewhere

4 Most common:

1. `useState()` = "get and set variables" (use state in a function, no class needed)

   - one way to look at the difference in usage between `useState` and `useReducer` is that you'd use `useState` for local component state, and `userReducer` for state across the app

   - <https://github.com/hacktivist123/React-Hooks-Project/blob/use-state/src/App.js>

2. `useEffect()` = "run stuff when create/update/destroy component" (handles component mounting + updating + un-mounting all in one function)

   - remember to set the 2nd parameter as an array (of deps or an empty array) if you want it to run just once upon creating ("mounting") the component, and not whenever the component gets updated ("updating")

   - <https://github.com/hacktivist123/React-Hooks-Project/blob/use-effect/src/App.js>

3. `useContext()` (share data between components without needing to pass data through props of all intermediate levels of components)

   - before, you had to use both the `<VariableContext.Provider variableName={'some value in parent'}>` wrapper on the parent and `<VariableContext.Consumer>` wrapper on each child component that reads the variable.

   - now, you can use the `<VariableContext.Provider variableName={'some value in parent'}>` wrapper on the parent and simply `const variableName = useContext(VariableContext);` in each child component that reads the variable.

4. `useReducer()` = "get and set variables" (so like `useState`, but for managing state across app instead of local within-component state, or for complex state logic, like multiple sub-values in objects containing data, or state depending heavily on previous state)

   - `const [state, dispatch] = useReducer(reducer, initialState, lazyInitFunction);`

## Others

- `useMemo` = useCallback but for _data_ to not have to repeat evaluation per re-render
- `useCallback` = useMemo but for _callback functions_ to not be recreated per re-render (e.g.: multiple child components in a list that use the same function object)
- `useRef` = ref to an element upon mount
- `createContext` and `useContext(ContextName)` = to avoid props drilling
- `useReducer` = for state across app (use useState for local component state)
- `useImperativeHandle` = (RARELY USED) let a component modify the ref from another component exposed by `useRef`
- `useLayoutEffect` = (RARELY USED) runs like `useEffect`, except it runs _after_ render but _before_ painting, basically waiting for the callback param to finish before updating the UI for the user (NOTE: blocks visual updates until callback finished), e.g. calculate scroll position before DOM visually updated
- `useDebugValue` = makes more sense when creating your own custom hooks: lets you define custom labels for hooks in React dev tools

```jsx
// custom hook:
function useDisplayName() {
  const [displayName, setDisplayName] = useState();
  useEffect(() => {
    const data = fetchFromDatabase(props.userId);
    setDisplayName(data.displayName);
  }, []);

  useDebugValue(displayName ?? "loading..."); // <-- will show up in React dev tools with custom label "DisplayName" (and value and the primitive hooks involved)

  return displayName;
}

function otherComponents() {
  const displayName = useDisplayName();
  return <button>{displayName}</button>;
}
```

## You can also create a custom React hook

- Why? To share logic between components (vs. copy-paste-ing useEffect code innards into a bunch of components) without needing to create components (Higher-Order Components) or pass props.

- "`use...`"

- <https://github.com/hacktivist123/React-Hooks-Project/blob/custom-hooks/src/useInfiniteScroll.js>

- See example: `cd custom-hook-working-example && npm install && npm start;` and notice the scrollbar changing size.

## More hooks

- `useCallback` = useMemo but for _callback functions_ to not be recreated per re-render

  ```jsx
  function Timer() {
    const [time, setTime] = useState();
    const [count, setCount] = useState(0);

    const inc = useCallback( // <--
      // inc callback is initialized as handleIncrementCount callback function:
      function handleIncrementCount() {
        setCount((prevCount) => prevCount + 1);
      },
      // second parameter of useCallback is dependencies array: (to decide whether to re-run useCallback)
      [setCount] // we avoid re-creating because setCount won't change (because it happens to be a hook)
    );

    useEffect(() => {
      // setTimeout sets time, triggering -> useEffect -> re-render -> but NOT re-create inc callback
      const timeout = setTimeout(() => {
        const currentTime = JSON.stringify(new Date(Date.now()));
        setTime(currentTime);
      }, 300);

      return (
        <div>
          <p>Current time: {time}</p>
          <p>Count: {count}</p>
          <button onClick={inc}>+</button> <!-- !!! -->
        </div>
      );
    });
  }
  ```

- `useMemo` = useCallback but for _data_ to not have to repeat evaluation per re-render

  ```js
  const output = useMemo(() => getFibonacci(inputDep), [inputDep]); // memoize: input -> output
  ```

- `useRef` = can use to ref to an element upon mount (returns a DOM element with DOM API)

  ```jsx
  function App() {
    const [query, setQuery] = useState("react hooks");

    const searchInput = useRef(null); // <--

    function handleClearSearch() {
      searchInput.current.value = "edited input element value"; // <--
      searchInput.current.focus(); // <-- etc. on component
    }

    return (
      <form>
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          ref={searchInput} {/* <-- */}
        />
      </form>
    );
  }
  ```

- `createContext` and `useContext(ContextName)` = to avoid props drilling

  ```jsx
  const UserContext = createContext(); // <-- note the capitalization = component

  function App() {
    const [user] = useState({ state: "Fred" });
    return (
      <UserContext.Provider value={user}>
        <Main />
      </UserContext.Provider>
    ); // <-- note Provider and value
  }

  const Main = () => {
    return (
      <>
        <Header />
        <div>Main app content...</div>
      </>
    );
  };

  const Header = () => {
    return (
      <UserContext.Consumer>
        {(user) => <header>Welcome, {user.name}</header>}
      </UserContext.Consumer>
    ); // <-- note Consumer and user comes from Provider value
  };

  const HeaderAlternatively = () => {
    const user = useContext(UserContext); // <-- note the UserContext component being passed in
    return <header>Welcome, {user.name}</header>;
  };
  ```

- `useReducer` = for state across app (use useState for local component state)

  - **reducers** can be used with `useReducer` to manage state across app
  - `useReducer` can be used with `useContext` to manage data and pass data between components easily

  ```jsx
  function App() {
    // note: state, dispatch, useReducer, reducer:
    const [state, dispatch] = useReducer(reducer, initialState); // <--

    function handleLogin() {
      dispatch({ type: "LOGIN", payload: { username: "Howard" } }); // <-- note: dispatch
    }

    function handleSignOut() {
      dispatch({ type: "SIGNOUT" });
    }

    return (
      <>
        Current user {state.username} {/* <-- note: state */}
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignOut}>Sign out</button>
        Authenticated: {state.isAuth} {/* <-- note: state */}
      </>
    );
  }
  ```
