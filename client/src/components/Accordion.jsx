import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import './Components.css'
import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
const Accordionmodal = () => {
  return (
    <div className='accordions'>
 <Accordion defaultIndex={[0]} allowMultiple backgroundColor={"#232323"} borderRadius={"15px"} border={"none"} width={"68vw"} >
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"#ffffff"} paddingLeft={"40px"} paddingTop={"15px"} paddingBottom={"15px"} fontSize={"4vmin"} fontFamily={"Saira Condensed"} fontWeight={"700"} >
          Question 1
        </Box>
        <AccordionIcon  color={"#ffffff"}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"#ffffff"} fontSize={"2.5vmin"} fontFamily={"Saira Condensed"} fontWeight={"500"} paddingLeft={"20px"} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Accordion defaultIndex={[0]} allowMultiple backgroundColor={"#232323"} borderRadius={"15px"} border={"none"} width={"68vw"} >
  <AccordionItem border={"none"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"#ffffff"} paddingLeft={"40px"} paddingTop={"15px"} paddingBottom={"15px"} fontSize={"4vmin"} fontFamily={"Saira Condensed"} fontWeight={"700"} >
          Question 1
        </Box>
        <AccordionIcon  color={"#ffffff"}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"#ffffff"} fontSize={"2.5vmin"} fontFamily={"Saira Condensed"} fontWeight={"500"} paddingLeft={"20px"} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Accordionmodal