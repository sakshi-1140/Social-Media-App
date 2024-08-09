import React, { useState } from 'react';

function AuthForm({ onSubmit, switchView, isRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      const user = { name, email, password };
      onSubmit(user); // Call handleRegister from App
    } else {
      const credentials = { nameOrEmail, password };
      onSubmit(credentials); // Call handleLogin from App
    }
    setNameOrEmail("")
    setPassword("")
    
  };
  
  return (
    <div className="form-container authFrom">
      <h2>{isRegister ? 'Register' : 'Hi, Welcome back! 👋'}</h2>
      <form onSubmit={handleSubmit} className='fromEle'>
        {isRegister ? (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Name or Email"
            value={nameOrEmail}
            onChange={(e) => setNameOrEmail(e.target.value)}
            required
          />
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary signbtn">{isRegister ? 'Register' : 'Sign In'}</button>
        <p onClick={switchView}>
          {isRegister ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
