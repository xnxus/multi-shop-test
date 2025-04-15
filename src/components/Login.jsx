import React, { useState } from "react";

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("nickname");
    const password = formData.get("password");
    console.log("Username:", username);
    console.log("Password:", password);

    setLoggedIn(true);

    setFormVisible(false);
  };

  return (
    <div
      className="login-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <h1>Login</h1>
      {formVisible && (
        <form onSubmit={handleSubmit} style={{ width: "300px" }}>
          <label htmlFor="nickname">Username:</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "1px solid #007bff",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      )}
      {loggedIn && (
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Thank you for logging in!
        </p>
      )}
    </div>
  );
}

export default Login;
