import React, { useState } from "react";
import "./Components.css";
import image1 from "./../assets/university.png";
import SearchBar from "./SearchBar";
import { Button } from "@chakra-ui/react";
import SidebarComponent from "./SidebarComponent";
import UniversityList from "./UniversityList";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleMoreInfoClick = async (universityId) => {
    try {
    // Corrected the use of template literals below
    const response = await fetch(`https://s54-manpreet-singh-capstone-uni-manpreet-singh-aroras-projects.vercel.app/university/${universityId}`);
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setSelectedUniversity(data);
    } catch (error) {
    console.error("Failed to fetch university details", error);
    }
    };
    

  const handleBackClick = () => {
    setSelectedUniversity(null);
  };

  return (
    <div style={{ display: "flex", background: "black" ,paddingTop:"3vmax", height:"100vh"}}>
      <SidebarComponent />
      <div className="searchpagemain">
        {selectedUniversity ? (
          <UniversityList university={selectedUniversity} onBackClick={handleBackClick} />
        ) : (
          <>
            <div className="searchpagebar">
              <SearchBar setData={setSearchResults} setSelectedExamType={setSelectedExamType} />
            </div>
            <div className="searchpageheading">Your Search Results</div>
            <div className="searchpageitems">
              {searchResults.filter(university => university.examType === selectedExamType).map((university) => (
                <div key={university._id} className="itemgrid">
                  <div className="itemimage">
                    <img src={university.image2} alt="University" />
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
                      onClick={() => handleMoreInfoClick(university._id)}
                    >
                      MORE INFO
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;