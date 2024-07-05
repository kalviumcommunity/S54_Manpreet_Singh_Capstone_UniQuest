import React, { useState, useEffect} from 'react'; // Assuming useContext is needed
import { Container, Text, HStack, Flex, Box, Avatar, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { ImQuotesRight } from 'react-icons/im';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Example context (replace or remove if not applicable)
  // const someContext = useContext(MyContext);

  useEffect(() => {
    fetch('http://localhost:8002/testimonial')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div>
      <div className='testimonialmain'>
        <div className='testimonialheading'>Testimonial</div>
        <div className='testimonialline'>OVER 100+ SATISFIED CUSTOMERS</div>
      </div>
      <Container maxW="5xl" p={{ base: 3, md: 6 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={8}>
          {testimonials.map((obj, index) => (
            <Flex key={index} direction="column">  
              <Box
                p={5}
                bg={useColorModeValue('#232323', 'blackAlpha.400')}
                color="white"
                borderTopLeftRadius="lg"
                borderTopRightRadius="lg"
              >
                {obj.content}
              </Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                p={5}
                bg={useColorModeValue('white', 'white')}
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <HStack spacing={2}>
                  <Avatar name="avatar" src={obj.image} />
                  <Flex direction="row">
                    <Text fontWeight="bold" fontSize="lg">
                      {obj.username}
                    </Text>
                  </Flex>
                </HStack>
                <Icon as={ImQuotesRight} w={8} h={8} />
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Testimonials;