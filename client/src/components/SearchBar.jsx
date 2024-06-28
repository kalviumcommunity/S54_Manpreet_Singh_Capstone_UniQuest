import React, { useState, useEffect } from "react";
import "./Components.css";
import { Button, FormControl, FormLabel, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import axios from "axios";

const SearchBar = ({ setData }) => {
  const [searchType, setSearchType] = useState("1"); // Default to University
  const [university, setUniversity] = useState("");
  const [universities, setUniversities] = useState([]);
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");

  const handleSearchTypeChange = (value) => {
    setSearchType(value);
  };

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleSearch = async () => {
    try {
      let response;
      if (searchType === "1") {
        response = await axios.get("http://localhost:8002/university");
      } else if (searchType === "2") {
        response = await axios.get("http://localhost:8002/exams");
      }
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:8002/university");
        setUniversities(response.data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    const fetchExams = async () => {
      try {
        const response = await axios.get("http://localhost:8002/exams");
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    if (searchType === "1") {
      fetchUniversities();
    } else if (searchType === "2") {
      fetchExams();
    }
  }, [searchType]);

  return (
    <div className="searchbar_background">
      <div className="searchbar_back">
        <div className="search_top">
          <div className="search_top_heading">Search By</div>
          <div className="search_top_type">
            <RadioGroup onChange={handleSearchTypeChange} value={searchType}>
              <Stack spacing={5} direction="row">
                <Radio colorScheme="white" value="1" fontSize={'4vmin'}>
                  University
                </Radio>
                <Radio colorScheme="white" value="2" fontSize={'4vmin'}>
                  Exams
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
        <div className="searchbar_bottom">
          {searchType === "1" && (
            <div className="searchbar_dropdown">
              <FormControl width={'95%'} borderColor={'#393737'}>
                <FormLabel color={"white"} fontSize={'2.1vmin'}>University</FormLabel>
                <Select 
                  placeholder='Select University' 
                  color={'white'} 
                  borderColor={'#393737'} 
                  backgroundColor={'#232323'} 
                  fontSize={'2.1vmin'}
                  onChange={handleUniversityChange}
                >
                  {universities.map((univ) => (
                    <option key={univ._id} value={univ.name} fontSize={'2.1vmin'}>
                      {univ.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
          {searchType === "2" && (
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
          )}
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