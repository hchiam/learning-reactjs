import React, { useState, useEffect } from "react";

function App() {
  // useState: (get and set variables)
  const [name, setName] = useState({ firstName: "name", surname: "surname" });
  const [title, setTitle] = useState("BIO");

  // useEffect: (run stuff when create/update/destroy component)
  useEffect(() => {
    // stuff inside useEffect is like onCreate/onUpdate
    setName({ firstName: "Shedrack", surname: "Akintayo" });
    setTitle("My Full Name");
    return () => {
      // stuff inside return inside useEffect is like onDestroy
    };
  }, []); // <-- if anything in this array changes, then useEffect runs again (empty array = run x1 once component mounted)

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {name.firstName}</h3>
      <h3>Surname: {name.surname}</h3>
    </div>
  );
}

export default App;
