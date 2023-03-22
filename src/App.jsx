import { useState } from 'react';
import './App.css';
import Signin from './signin';
import Signup from './signup';
import Authenticated from './authenticated';


function App() {
  const [currentForm, setCurrentForm] = useState('signin')
  const [newUser, setNewUser] = useState([])
  const toggleForm = (formName)=> {
    setCurrentForm(formName)
  }

  function addUser(createUser) {
   setNewUser(createUser)
  }
  function handleLogin(logingIn) {
if (newUser===logingIn) {
     setCurrentForm("auth")
}else {
  alert("Email ou Senha incorretos")
}
  }
  
  return (
    <div>
      
     {
        currentForm === "signin" ? <Signin logingUser={handleLogin} onFormSwitch={toggleForm} /> 
      : currentForm === "signup" ? <Signup  user={addUser} onFormSwitch={toggleForm} /> 
      : currentForm === "auth" ? <Authenticated onFormSwitch={toggleForm} /> : ""
      }

    </div>
  );
}

export default App;
