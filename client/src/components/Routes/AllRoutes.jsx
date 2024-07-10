import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../SearchPage";
import { Login } from "./PrivateRoutes";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login>
            <SearchPage />
          </Login>
        }
      />
    </Routes>
  );
}
