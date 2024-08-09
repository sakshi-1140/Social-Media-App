import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AuthForm from "./component/AuthForm";
import { useEffect } from "react";
import Profile from "./component/profile";
import { useNavigate } from "react-router-dom";




function App() {
  const navigate = useNavigate()
  

  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // Default view is 'login'

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleRegister = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    setView('login'); // Switch to login view after registration
  };

  const handleLogin = (credentials) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const isValidUser = (storedUser.name === credentials.nameOrEmail || storedUser.email === credentials.nameOrEmail) && storedUser.password === credentials.password;
      if (isValidUser) {
        setUser(storedUser);
        navigate("/home")
        //setView('profile');
        return;
      }
    }
    alert('Invalid name/email or password');
  };

  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <div className="app-container container">
      {view === 'register' && (
        <AuthForm
          onSubmit={handleRegister}
          switchView={() => switchView('login')}
          isRegister={true}
        />
      )}
      {view === 'login' && (
        <AuthForm
          onSubmit={handleLogin}
          switchView={() => switchView('register')}
          isRegister={false}
        />
      )}
      {/* {view === 'profile' && <Profile user={user}/>} */ }
    </div>
  ); 
    
  
  
}

export default App;
