import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [ profile, setProfile ] = useState({});

  useEffect(() => {
    axios.get("https://api.github.com/users/emilioramirezeguia")
    .then(response => {
      setProfile(response.data);
    })
    .catch(error => {
      console.log("There's an error: ", error);
    })
  },[]);

  return (
    <div className="App">
      <h1>Hello {profile.name}!</h1>
    </div>
  );
}

export default App;
