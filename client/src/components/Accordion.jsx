import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import './Components.css';

const Accordionmodal = () => {
  const [faqs, setFaqs] = useState([]);  // State to hold FAQ data

  useEffect(() => {
    // Fetch FAQs from the backend
    fetch('http://localhost:8002/faq')  // Replace 'http://your-backend-url/faq' with your actual backend URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        return response.json();
      })
      .then(data => setFaqs(data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  return (
    <div className='accordions'>
      <Accordion defaultIndex={[0]} allowMultiple backgroundColor={"#232323"} borderRadius={"15px"} border={"none"} width={"68vw"} >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} border={"none"}>  
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={"#ffffff"} paddingLeft={"40px"} paddingTop={"15px"} paddingBottom={"15px"} fontSize={"4vmin"} fontFamily={"Saira Condensed"} fontWeight={"700"}>
                  {faq.question}
                </Box>
                <AccordionIcon color={"#ffffff"}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#ffffff"} fontSize={"2.5vmin"} fontFamily={"Saira Condensed"} fontWeight={"500"} paddingLeft={"20px"}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordionmodal;