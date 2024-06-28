import React from "react";
import "./Components.css";
import image1 from "./../assets/university.png";
import SearchBar from "./SearchBar";
import { Button } from "@chakra-ui/react";
import SidebarComponent from "./SidebarComponent";

const SearchPage = () => {
  return (
    <div style={{ display: "flex", height: "100vh", background: "black" }}>
      <SidebarComponent />
      <div className="searchpagemain">
        <div className="searchpagebar">
          <SearchBar /> 
        </div>
        <div className="searchpageheading">Your Search Results</div>
        <div className="searchpageitems">
          <div className="itemgrid">
            <div className="itemimage">
              <img src={image1} alt="University" />
            </div>
            <div className="itemName">Stanford University</div>
            <div className="itemDescription">
              Nestled amidst California's sunshine, Stanford University stands
              as a beacon of academic excellence and innovation.
            </div>
            <div className="itemInfo">
              <Button
                backgroundColor={"#EEB572"}
                width={"20vw"}
                height={"5.3vh"}
                borderRadius={"16"}
                color={"#000000"}
                fontSize={"2.1vmin"}
                fontWeight={"400"}
                fontStyle={"Saira Condensed"}
              >
                MORE INFO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
