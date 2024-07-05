import React, { useState } from "react";
import "./Components.css";
import image1 from "./../assets/university.png";
import SearchBar from "./SearchBar";
import { Button } from "@chakra-ui/react";
import SidebarComponent from "./SidebarComponent";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");  // State to hold the selected exam type

  return (
    <div style={{ display: "flex", height: "100vh", background: "black" }}>
      <SidebarComponent />
      <div className="searchpagemain">
        <div className="searchpagebar">
          <SearchBar setData={setSearchResults} setSelectedExamType={setSelectedExamType} />
        </div>
        <div className="searchpageheading">Your Search Results</div>
        <div className="searchpageitems">
          {/* Filter and render search results here */}
          {searchResults.filter(university => university.examType === selectedExamType).map((university) => (
            <div key={university._id} className="itemgrid">
              <div className="itemimage">
                <img src={image1} alt="University" />
              </div>
              <div className="itemName">{university.name}</div>
              <div className="itemDescription">{university.description}</div>
              <div className="itemInfo">
                <Button
                  backgroundColor={"#EEB572"}
                  width={"20vw"}
                  height={"5.1vh"}
                  borderRadius={"16"}
                  color={"#000000"}
                  fontSize={"2.1vmin"}
                  fontWeight={"400"}
                  fontStyle={"Saira Condensed"}
                  marginTop={"4.5vh"}
                >
                  MORE INFO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;