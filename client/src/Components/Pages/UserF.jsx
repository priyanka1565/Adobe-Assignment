import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const UserF = () => {
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log("ghgggg")
    }

  return (
    <div>
      <Box
        maxW="md"
        mx="auto"
        padding={"2rem"}
        boxShadow={
          "hsla(27.272727272727245, 5.213270142180097%, 41.37254901960784%, 0.2) 0px 7px 29px 0px;"
        }
        marginTop={"5.5rem"}
        borderRadius={"0.5rem"}
      >
        <form onSubmit={handleSubmit}>
          <Heading textAlign={"center"} marginBottom={"2rem"}>
            User Information
          </Heading>
          <FormControl id="name">
            <FormLabel>  Name</FormLabel>
                      <Input type="text" id="name" value={name}
                          onChange={(e)=>(e.target.value)}
                      
                      />
          </FormControl>

          <FormControl id="email">
            <FormLabel>  Email</FormLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="bio">
            <FormLabel>  Bio</FormLabel>
                      <Input type="textarea" value={bio}
                          onChange={(e)=>(e.target.value)}
                      />
          </FormControl>

          <Button mt={4} colorScheme="cyan" type="submit">
            Save
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default UserF;
