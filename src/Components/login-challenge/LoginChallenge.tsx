import { Button, Container, Heading, Center, Text } from "@chakra-ui/react";
export const LoginChallenge = (props: any) => {
  return (
    <Center bg="#f4f6f7" h="100vh" color="white">
      <Container h="200px" maxW="550px" p={8} bg="white" color="black">
        {props.appStatus === "" ? (
          <div className="App">
            <Text fontSize="4xl">Sign In</Text>

            <Center>
              <div>
                <Button
                  onClick={props.generateAuthUrl}
                  colorScheme="#8e44ad"
                  variant="outline"
                  color="black"
                >
                  Start Session
                </Button>
              </div>
            </Center>
          </div>
        ) : (
          <div>
            <Text fontSize="4xl">Authenticating...</Text>
          </div>
        )}
      </Container>
    </Center>
  );
};
