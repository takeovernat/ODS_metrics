import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Bot from './components/Bot';
import User from './components/User';
import data from './data/data.json';

function App() {
  let i = 1;
  return (
    <div className="App">
      {data.map((json, index) => {
        // Initialize an array to hold the components for this json object
        const components = [];
        components.push(<h1> Session #{i} </h1>)
        i++;
        // Iterate over the key-value pairs in the json object
        for (const [key, value] of Object.entries(json)) {
          if (key.includes('interaction')) {
            // Determine which component to add based on the value
            if (value != null && value.includes('Bot says')) {
              components.push(<Bot key={`${index}-${key}`} message={value} />);
            } else if (value != null && value.includes('User says'))  {
              components.push(<User key={`${index}-${key}`} message={value} />);
            }
          }
        }

        // Return the accumulated components for this json object
        return <div key={index}>{components}</div>;
      })}
    </div>
  );
}

export default App;
