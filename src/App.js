import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "./components/header.jsx";
import Text from "./components/text.jsx";
import Image from "./components/image.jsx";
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
      <Header />
      <Text>{profile.name}</Text>
      <Text>{profile.location}</Text>
      <Image url={profile.avatar_url} />
    </div>
  );
}

export default App;
