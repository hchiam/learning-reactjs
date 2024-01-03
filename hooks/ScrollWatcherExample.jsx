import React, {
  useEffect,
  useState,
} from 'react';

function App() {
  const { scrollY } = ScrollWatcher();
  return (
    <>
      <h1>Scroll position:</h1>
      {scrollY}
    </>
  );
}

function ScrollWatcher(props = {}) {
  const { callback } = props;
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  function handleScroll() {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    if (callback) callback(scrollX, scrollY);
  }
  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll
    );
  });

  return { scrollX, scrollY };
}

export default App;