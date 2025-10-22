import React from "react";
import { Route, Routes } from "react-router-dom";

// Import components
import Homepage from "../Homepage";
import SearchPage from "../SearchPage";
import ExamList from "../ExamList";
import { Login } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/search"
        element={
          <Login>
            <SearchPage />
          </Login>
        }
      />
      <Route
        path="/examlist"
        element={
          <Login>
            <ExamList />
          </Login>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
