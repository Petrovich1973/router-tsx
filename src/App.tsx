import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input'

function App() {
  const [value, setValue] = React.useState('text')
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input value={value} onChange={handleChangeValue}/>
      </header>
    </div>
  );
}

export default App;
