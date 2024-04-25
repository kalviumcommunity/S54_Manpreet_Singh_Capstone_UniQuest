import React from "react";
import "./Components.css";
import { Button, FormControl, FormLabel, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
const SearchBar = () => {
  return (
    <div className="searchbar_background">
      <div className="searchbar_back">
        <div className="search_top">
          <div className="search_top_heading">Search By</div>
          <div className="search_top_type">
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="white" value="1"  fontSize={'4vmin'}>
                  University
                </Radio>
                <Radio colorScheme="white" value="2"  fontSize={'4vmin'}>
                  Exams
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
        <div className="searchbar_bottom">
          <div className="searchbar_dropdown">
          <FormControl width={'95%'} borderColor={'#393737'}>
  <FormLabel color={"white"}  fontSize={'2.1vmin'}>University</FormLabel>
  <Select placeholder='Select University' color={'white'} borderColor={'#393737'} backgroundColor={'#232323'}  fontSize={'2.1vmin'}>
    <option  fontSize={'2.1vmin'}>BITS Pilani </option>
    <option  fontSize={'2.1vmin'}>VIT Vellore</option>
    </Select>
</FormControl>
          </div>
          <div className="searchbar_button">
          <Button backgroundColor={'#EEB572'} width={'8vw'} height={'5.3vh'} borderRadius={'16'} color={'#000000'}fontSize={'2.1vmin'} fontWeight={'400'}>
    SEARCH
  </Button>
  </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
