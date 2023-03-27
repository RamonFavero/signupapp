import { useState } from 'react';
import './App.css';
import Signin from './signin';
import Signup from './signup';
import Authenticated from './authenticated';


function App() {
  const [currentForm, setCurrentForm] = useState('signin')
  const [newUser, setNewUser] = useState([undefined,undefined])
  
  const toggleForm = (formName)=> {
    setCurrentForm(formName)
  }

  function addUser(createdUserEmail, createdUserPass) {
   setNewUser([createdUserEmail,createdUserPass])
  }

  function handleLogin(givenUserEmail,givenUserPass) {
   

if (newUser[1]===givenUserPass) {
if (newUser[0]===givenUserEmail) {
  setCurrentForm("auth")
}else {
  alert("Email incorreto")
}   
}else {
  alert("Senha incorreta")
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
