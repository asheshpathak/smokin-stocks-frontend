import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthSuccess } from "./Components/auth-success/AuthSuccess";
import { LoginChallenge } from "./Components/login-challenge/LoginChallenge";
import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./Components/auth-success/Dashboard/Dashboard";
import { brightTheme } from "./bright-theme";
import { Watchlist } from "./Components/auth-success/Wishlist/Watchlist";

function App() {
  const [authCodeUrl, setAuthCodeUrl] = useState("");
  const [profileInformation, setProfileInformation] = useState<String>();
  const [appStatus, setAppStatus] = useState("");
  const generateAuthUrl = async () => {
    setAppStatus("authenticating");
    let serverUrl =
      "https://morning-river-75539-0158946b6190.herokuapp.com/get/url";
    let localUrl = "http://localhost:5999/get/url";
    const response = await fetch(serverUrl);
    const result = await response.json();
    // setAuthCodeUrl(result.url);
    window.location.href = result.url;
  };

  return (
    <ChakraProvider theme={brightTheme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginChallenge
                generateAuthUrl={generateAuthUrl}
                appStatus={appStatus}
              />
            }
          ></Route>
          <Route
            path="/auth-success"
            element={<AuthSuccess profileInformation={profileInformation} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="positions" element={<Dashboard />} />
            <Route path="funds" element={<Dashboard />} />
            <Route path="baskets" element={<Dashboard />} />
            <Route path="reports" element={<Dashboard />} />
            <Route path="foreignMarkets" element={<Dashboard />} />
            <Route path="customize" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
