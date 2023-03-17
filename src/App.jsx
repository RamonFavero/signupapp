import { useState } from 'react';
import './App.css';
import Signin from './signin';
import Signup from './signup';

function App() {
  const [currentForm, setCurrentForm] = useState('signin')

  const toggleForm = (formName)=> {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
      {
        currentForm === "signin" ?  <Signin onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
      }

     
    </div>
  );
}

export default App;
