import React, { useState, useEffect } from "react";
import "./Components.css";
import { Button, FormControl, FormLabel, Select } from "@chakra-ui/react";
import axios from "axios";

const SearchBar = ({  setData, setSelectedExamType }) => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
    setSelectedExamType(event.target.value);  // Set the selected exam type in SearchPage
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:8002/university", {
        params: { exam: selectedExam }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://localhost:8002/exams");
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="searchbar_background">
      <div className="searchbar_back">
        <div className="search_top">
          <div className="search_top_heading">Search By Exam</div>
        </div>
        <div className="searchbar_bottom">
          <div className="searchbar_dropdown">
            <FormControl width={'95%'} borderColor={'#393737'}>
              <FormLabel color={"white"} fontSize={'2.1vmin'}>Exams</FormLabel>
              <Select 
                placeholder='Select Exam' 
                color={'white'} 
                borderColor={'#393737'} 
                backgroundColor={'#232323'} 
                fontSize={'2.1vmin'}
                onChange={handleExamChange}
              >
                {exams.map((exam) => (
                  <option key={exam._id} value={exam.name} fontSize={'2.1vmin'}>
                    {exam.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="searchbar_button">
            <Button 
              backgroundColor={'#EEB572'} 
              width={'8vw'} 
              height={'5.3vh'} 
              borderRadius={'16'} 
              color={'#000000'}
              fontSize={'2.1vmin'} 
              fontWeight={'400'}
              onClick={handleSearch}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;