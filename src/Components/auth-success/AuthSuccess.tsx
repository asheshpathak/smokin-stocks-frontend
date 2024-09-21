import React, { useEffect } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import { Grid, GridItem, Divider, Box } from "@chakra-ui/react";
import { SideNav } from "./SideNav";
export const AuthSuccess = (props: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth_token"]);
  useEffect(() => {
    console.log(document.cookie);
    const cookieString = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));
    if (cookieString) {
      const token = cookieString.split("=")[1];
      const decodedData = jwtDecode(token);
      console.log("Decoded JWT Data:", decodedData);
    } else {
      console.log("No auth token found in cookies.");
    }
    const token = cookies.auth_token;
    console.log("Auth Token:", token);
  }, []);
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const authCode = queryParams.get("X-Authenticated-User");
  //   console.log(authCode);
  //   if (authCode) {
  //     sessionStorage.setItem("authCode", authCode); // Store auth-code in session storage
  //     console.log("Auth code stored in session storage:", authCode);
  //   }
  // }, []);
  // const fetchQuotes = async () => {
  //   let quotes = await fetch(
  //     "https://morning-river-75539-0158946b6190.herokuapp.com/get/quotes"
  //   );
  //   let parsedQuotes = await quotes.json();
  //   console.log(parsedQuotes);
  // };
  useEffect(() => {
    // fetchQuotes();
    // console.log(props.profileInformation);
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(16, 1fr)" gap={0}>
        <GridItem
          w="100%"
          colSpan={3}
          h="100vh"
          bg="white"
          border="1px"
          borderColor="gray.200"
        >
          <SideNav />
        </GridItem>
        <GridItem w="100%" h="100vh" colSpan={13} bg="white">
          <Grid templateRows="repeat(24, 1fr)" height="100%">
            <GridItem rowSpan={2} borderBottom="1px" borderColor="gray.200">
              <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="right"
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "tomato",
                    margin: "10px",
                    borderRadius: "50%",
                  }}
                ></div>
              </Box>
            </GridItem>
            <GridItem rowSpan={22}>
              <Outlet />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

// export const getStoredAuthCode = () => {
//   return sessionStorage.getItem("authCode");
// };
