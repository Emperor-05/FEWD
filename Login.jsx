import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const users = [
    { username: 'admin', password: '123' },
    { username: 'user', password: '123' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      u => u.username === loginData.username && u.password === loginData.password
    );
    
    if (foundUser) {
      setUser(foundUser.username);
      localStorage.setItem('user', foundUser.username);
    } else {
      alert('Invalid login!');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Check if user is already logged in
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(savedUser);
  }, []);

  if (user) {
    return (
      <div>
        <h2>Welcome, {user}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username (admin or user)"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password (123)"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Try: admin/123 or user/123</p>
    </div>
  );
};

export default Login;
