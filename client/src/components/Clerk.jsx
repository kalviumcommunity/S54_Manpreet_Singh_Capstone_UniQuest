import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import axios from "axios";

export default function ClerkAuth() {
  const { user } = useUser();
  useEffect(() => {
    const signIn = async () => {
      try {
        console.log(user);
        let userName = user.username || user.fullName || "Unknown User";
        let userEmail = user.emailAddresses[0].emailAddress;
        const userdata = {
          // Ensure you're sending the correct fields
          name: userName,
          email: userEmail,
        };
        console.log(userdata);
        const result = await axios.post("https://s54-manpreet-singh-capstone-uni-quest.vercel.app/user", userdata);
        console.log("result: ", result);
      } catch (error) {
        console.error("Error while signing in:", error);
      }
    };

    if (user) {
      signIn();
    }
  }, [user]);
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};