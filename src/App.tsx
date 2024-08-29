import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthSuccess } from "./Components/auth-success/AuthSuccess";

function App() {
  const [authCodeUrl, setAuthCodeUrl] = useState("");
  const generateAuthUrl = async () => {
    let serverUrl =
      "https://morning-river-75539-0158946b6190.herokuapp.com/get/url";
    let localUrl = "http://localhost:5999/get/url";
    const response = await fetch(serverUrl);
    const result = await response.json();
    setAuthCodeUrl(result.url);
    window.location.href = result.url;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div>Hello from App!</div>
              <button onClick={generateAuthUrl}>Start Session</button>
            </div>
          }
        ></Route>
        <Route path="/auth-success" element={<AuthSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
