"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
// import Navebar from "./Navebar";
import SimpleSidebar from "./Navebar"
export default function page(){
  return(
    <ChakraProvider>
      <SimpleSidebar></SimpleSidebar>
    <h1>My first Web</h1>
    <Home></Home>
    </ChakraProvider>
  );
}