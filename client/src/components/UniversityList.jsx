import React from 'react';
import SidebarComponent from "./SidebarComponent";
import "./Components.css";
import { Button } from "@chakra-ui/react";


const UniversityList = ({ university, onBackClick }) => {
  return (
    <div style={{ display: "flex", background: "black" ,paddingTop:"3vmax", height:"100vh" , overflowX:"hidden"}}>
      {/* <SidebarComponent />  */}
      <div className='university-component' style={{ overflowX: 'hidden' }}> 
      <div style={{display:"flex",justifyContent:"end",paddingBottom:"2vh"}}>
        <Button
          backgroundColor={"#EEB572"}
          width={"10vw"}
          height={"5.1vh"}
          borderRadius={"16"}
          color={"#000000"}
          fontSize={"2.1vmin"}
          fontWeight={"400"}
          fontStyle={"Saira Condensed"}
          padding={"3vh"}
          onClick={onBackClick}
        >
          BACK
        </Button>
        </div>

        <div className="university-image">
          <img src={university.image1} alt={university.name} />
        </div>
        <div className="university-name">
          {university.name}
        </div>
        <div className="ranking">
          {/* Add ranking information here if available */}
        </div>
        <div className="desc">
          {university.description}
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "5vmax" }}>
          <div style={{ width: "65vw", height: "1.5px", backgroundColor: 'white' }}></div>
        </div>
        <div className="uni-heading">
          Eligibility
        </div>
        <div className="desc">
          {university.eligibility}
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "5vmax" }}>
          <div style={{ width: "65vw", height: "1.5px", backgroundColor: 'white' }}></div>
        </div>
        <div className="uni-heading">
          Placement
        </div>
        <div className="desc">
          {university.placement}
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "5vmax" }}>
          <div style={{ width: "65vw", height: "1.5px", backgroundColor: 'white' }}></div>
        </div>
        <div className="uni-heading">
          Contacts
        </div>
        <div className="contacts">
          <div className="contact-item">Address: <span>{university.contact.address}</span></div>
          <div className="contact-item">Phone: <span>{university.contact.phone}</span></div>
          <div className="contact-item">Email: <span>{university.contact.email}</span></div>
          <div className="contact-item">Website: <span>{university.contact.website}</span></div>
        </div>
      </div>
    </div>
  );
};

export default UniversityList;