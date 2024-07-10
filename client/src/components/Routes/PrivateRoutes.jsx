import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AppContext } from "../Context";

export const Login = ({ children }) => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(AppContext);
  const toast = useToast();
  useEffect(() => {
    if (!login) {
      toast({
        title: "Not Logged In",
        description: "Please login to access that service!",
        status: "error",
        duration: 4000,
        isClosable: false,
      });
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};
