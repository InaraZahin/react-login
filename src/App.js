import react from "react";
import LoginForm from './components/LoginForm';
import React, {useState} from 'react';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"

  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email== adminUser.email && details.password == adminUser.password){
    console.log("Success");
    setUser ({
      name: details.name,
      email: details.email,
      

    });
     } else {
    console.log("Error!");
    setError("Error!");
     }
  }


  const Logout = () => {
    setUser({name: "", email: ""});
    
  }


  return (
    <div className="App">
      {(user.email != "" )? (
        <div className = "Success">
          <h2>Success! Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error} />
      )}

    </div>
  );
}

export default App;
