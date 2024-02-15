import React, { useState, useEffect } from 'react';
import GetItems from './GetItems';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'true') {
      props.setLoggedIn(true);
    }
  }, []);

  const onSubmitClick = (e) => {
    e.preventDefault();
    if (email === 'login' && password === 'jelszo') {
      localStorage.setItem("login", true);
      props.setLoggedIn(true);
    } else {
      alert('Hibás jelszó vagy felhasználónév!');
    }
  };

  return (
    <>
      {props.loggedIn ? (
        <GetItems loggedIn={props.loggedIn} />
      ) : (
        <form>
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={onSubmitClick}>
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default Login;
