import React, { useEffect, useState } from 'react';
import SidebarComponent from "./SidebarComponent";
import "./Components.css";
import { Button } from "@chakra-ui/react";

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch('https://s54-manpreet-singh-capstone-uni-quest.vercel.app/exams')
      .then(response => response.json())
      .then(data => setExams(data))
      .catch(error => console.error('Error fetching exams:', error));
  }, []);

  return (
    <div style={{ display: "flex", background: "black",  }}>
      <SidebarComponent />
      <div className='exam-component'>
        <h1 style={{ color: "white", textAlign: "center", margin: "2rem", fontSize:"3.5vmax"}}>Exams List</h1>
        {exams.map(exam => (
          <div key={exam._id} className='exam-item' >
            <img src={exam.image} alt={exam.name} style={{ width: "18vmax", height: "13vmax", float: "left", marginLeft: "2vmax", marginBottom:"1vmax" }} />
            <div style={{color: "white", paddingLeft:"25vmax", fontSize:"2vmax"}} className="exam-name">{exam.name}</div>
            <div style={{color: "white", paddingLeft:"25vmax",width:"70vmax"}} className="exam-description">{exam.description}</div>
            <div style={{color: "white",paddingLeft:"25vmax"}} className="exam-details">
              <div><strong>Exam Should Give:</strong> {exam.examShouldGive ? exam.examShouldGive : "N/A"}</div>
              <div><strong>Exam Can Give:</strong> {exam.examCanGive}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "5vmax" }}>
          <div style={{ width: "80vw", height: "1.5px", backgroundColor: 'white' }}></div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamList;