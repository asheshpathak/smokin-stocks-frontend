import React, { useEffect } from "react";

export const AuthSuccess = () => {
  //   useEffect(() => {
  //     const queryParams = new URLSearchParams(window.location.search);
  //     const authCode = queryParams.get("code");
  //     console.log(authCode);
  //     if (authCode) {
  //       sessionStorage.setItem("authCode", authCode); // Store auth-code in session storage
  //       console.log("Auth code stored in session storage:", authCode);
  //     }
  //   }, []);
  const fetchQuotes = async () => {
    let quotes = await fetch(
      "https://morning-river-75539-0158946b6190.herokuapp.com/get/quotes"
    );
    let parsedQuotes = await quotes.json();
    console.log(parsedQuotes);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return <div>Authenticated Successfully</div>;
};

// export const getStoredAuthCode = () => {
//   return sessionStorage.getItem("authCode");
// };
