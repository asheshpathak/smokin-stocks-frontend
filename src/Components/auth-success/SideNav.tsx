import {
  SimpleGrid,
  Box,
  Grid,
  GridItem,
  VStack,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  const navItems = [
    { displayName: "Dashboard", value: "dashboard" },
    { displayName: "Watchlist", value: "watchlist" },
    { displayName: "Positions", value: "positions" },
    { displayName: "Funds", value: "funds" },
    { displayName: "Orders", value: "orders" },
    { displayName: "Baskets", value: "baskets" },
    { displayName: "Reports", value: "reports" },
    { displayName: "Foreign Markets", value: "foreignMarkets" },
    { displayName: "Customize", value: "customize" },
  ];
  const [currentSelection, setCurrentSelection] = useState("Dashboard");
  const setHighlightOnCurrentSelection = (e: any) => {
    const nameValue = e.target.getAttribute("data-name");
    setCurrentSelection(nameValue);
  };
  return (
    <Box height="100vh">
      <Grid templateRows="repeat(16, 1fr)" height="100%">
        <GridItem rowSpan={3}>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h1>Logo</h1>
              <Input
                w="80%"
                placeholder="SEARCH"
                size="sm"
                m={2}
                fontFamily="text"
              />
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={6}>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="left"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <VStack ml={10} align="start" width="100%" p={4} fontFamily="text">
              {navItems.map((item, index) => {
                return (
                  <Box key={index} cursor="pointer">
                    <Text
                      fontWeight={currentSelection === item.value ? "bold" : ""}
                    >
                      <Link to={`/auth-success/${item.value}`}>
                        <span
                          data-name={item.value}
                          onClick={setHighlightOnCurrentSelection}
                        >
                          {item.displayName}
                        </span>
                      </Link>
                    </Text>
                  </Box>
                );
              })}
              {/* <Box cursor="pointer">
                <Text
                  fontWeight={currentSelection === "dashboard" ? "bold" : ""}
                >
                  <Link to="/auth-success/dashboard">Dashboard</Link>
                </Text>
              </Box>
              <Box cursor="pointer">
                <Link to="/auth-success/watchlist">Watchlist</Link>
              </Box>
              <Box cursor="pointer">Positions</Box>
              <Box cursor="pointer">Funds</Box>
              <Box cursor="pointer">Orders</Box>
              <Box cursor="pointer">Baskets</Box>
              <Box cursor="pointer">Reports</Box>
              <Box cursor="pointer">Foreign Markets</Box>
              <Box cursor="pointer">Customize</Box> */}
            </VStack>
          </Box>
        </GridItem>
        <GridItem rowSpan={5}>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <VStack ml={10} align="start" width="100%" fontFamily="text">
              <Text fontFamily="text" fontWeight="bold">
                DEVELOPER TOOLS
              </Text>
              <Box>Dashboard</Box>
              <Box>
                <Text>Watchlist</Text>
              </Box>
              <Box>Positions</Box>
            </VStack>
          </Box>
        </GridItem>
        <GridItem rowSpan={2}>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="180px"
              height="50px"
              border="2px"
              borderColor="gray.200"
              bg="#8BCA67"
            >
              <Text fontFamily="text" fontWeight="bold">
                AI Analysis
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
