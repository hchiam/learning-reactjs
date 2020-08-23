# React hooks

<https://www.smashingmagazine.com/2020/04/react-hooks-api-guide>

4 Most common:

1. `useState()` = "get and set variables" (use state in a function, no class needed)

   - <https://github.com/hacktivist123/React-Hooks-Project/blob/use-state/src/App.js>

2. `useEffect()` = "run stuff when create/update/destroy component" (handles component mounting + updating + un-mounting all in one function)

   - remember to set the 2nd parameter as an array (of deps or an empty array) if you want it to run just once upon creating ("mounting") the component, and not whenever the component gets updated ("updating")

   - <https://github.com/hacktivist123/React-Hooks-Project/blob/use-effect/src/App.js>

3. `useContext()` (share data between components without needing to pass data through props of all intermediate levels of components)

   - before, you had to use both the `<VariableContext.Provider variableName={'some value in parent'}>` wrapper on the parent and `<VariableContext.Consumer>` wrapper on each child component that reads the variable.

   - now, you can use the `<VariableContext.Provider variableName={'some value in parent'}>` wrapper on the parent and simply `const variableName = useContext(VariableContext);` in each child component that reads the variable.

4. `useReducer()` = "get and set variables" (so like `useState`, but for complex state logic, like multiple sub-values in objects containing data, or state depending heavily on previous state)

   - `const [state, dispatch] = useReducer(reducer, initialState, lazyInitFunction);`

## Others

- `useCallback`
- `useMemo`
- `useRef`
- `useImperativeHandle`
- `useLayoutEffect`
- `useDebugValue`

## You can also create a custom React hook

- `use...`

- <https://github.com/hacktivist123/React-Hooks-Project/blob/custom-hooks/src/useInfiniteScroll.js>

- See example: `cd custom-test && npm install && npm start;` and notice the scrollbar changing size.
