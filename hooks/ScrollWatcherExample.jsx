import React, { useEffect, useState } from 'react';

function App() {
  const { y: scrollY } = useScrollPosition();
  return (
    <>
      <h1>Scroll position:</h1>
      {scrollY}
    </>
  );
}

function useScrollPosition(props = {}) {
  const { /* TODO: */ valueRefreshRate } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleScroll() {
      setPosition({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
}

export default App;