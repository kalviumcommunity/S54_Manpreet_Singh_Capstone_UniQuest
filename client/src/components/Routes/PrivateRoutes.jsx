import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";

export const Login = ({ children }) => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  const toast = useToast();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast({
        title: "Not Logged In",
        description: "Please login to access that service!",
        status: "error",
        duration: 4000,
        isClosable: false,
      });
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, toast]);

  // Show loading while checking authentication
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Show children only if user is signed in
  return isSignedIn ? <>{children}</> : null;
};
