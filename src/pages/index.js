import React, { useState } from 'react';
import { graphql } from 'gatsby';

import "../css/type.css";

import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export const pageQuery = graphql`
  query MyQuery {
    theWisdom: allGoogleSpreadsheetWisdom {
      nodes {
        type
        kerning
        id
      }
    }
    theBri: allGoogleSpreadsheetTheBri {
      nodes {
        type
        kerning
        id
      }
    }
    theAudra: allGoogleSpreadsheetTheAudra{
      nodes {
        type
        kerning
        id
      }
    }
    theHenry: allGoogleSpreadsheetTheHenry{
      nodes {
        type
        kerning
        id
      }
    }
    theSofia: allGoogleSpreadsheetTheSofia{
      nodes {
        type
        kerning
        id
      }
    }
    thePalermo: allGoogleSpreadsheetThePalermo{
      nodes {
        type
        kerning
        id
      }
    }
    theDylan: allGoogleSpreadsheetTheDylan{
      nodes {
        type
        kerning
        id
      }
    }
    theTalley: allGoogleSpreadsheetTheTalley{
      nodes {
        type
        kerning
        id
      }
    }
    fromTheDeskOf: allGoogleSpreadsheetFromTheDesk{
      nodes {
        type
        kerning
        id
      }
    }
  }
`
const colors = [
  ['Powder', '#ADC1DC', '#FFF'],
  ['Denim', '#2C5B8E', '#FFF'],
  ['Navy', '#4A4B62', '#FFF'],
  ['Grey', '#B8BBB3', '#FFF'],
  ['Mint', '#E0EEDC', '#000'],
  ['Clover', '#286B3F', '#FFF'],
  ['Lupin', '#E6D4E7', '#000'],
  ['Plum', '#332140', '#FFF'],
  ['Eucalyptus', '#545F5E', '#FFF'],
  ['Taupe', '#EAE3D0', '#000'],
  ['Rosie', '#EEC8CB', '#000'],
  ['Blush', '#FEF0EA', '#000'],
  ['Papaya', '#E68972', '#FFF'],
  ['Red', '#C32033', '#FFF'],
  ['Tangerine', '#E78824', '#FFF'],
  ['Rain Jacket', '#F0E232', '#b15b12'],
  ['Gold', '#AF986E', '#FFF'],
  ['Leather', '#694422', '#FFF'],
  ['Silver', '#B3B6B8', '#FFF'],
  ['Black', '#000000', '#FFF'],
];
// markup
const IndexPage = ({data}) => {
  const [style, setStyle] = useState('theWisdom');
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex];
  const [fontId, setFontId]  = useState('c30b0034-34db-56e7-8012-213832df2366');
  const font = data[style]?.nodes.find(node => node.id === fontId);
  const [cardCopy, setCardCopy] = useState('YOUR COPY HERE');
  
  console.log(font);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box bg='#e9e9e9' height='100vh'>
      <Container maxW="container.xl" p="50" >
      <title>Alissa Bell</title>
      <Button ref={btnRef} colorScheme="orange" onClick={onOpen}>
        Edit Card Settings
      </Button>
      <Flex className={`cardParent ${style}`} alignItems='center' justifyContent='center'>
        {/* <Flex className={`envelope`} >
          
        </Flex> */}
        <Flex className={`card `} w='583px' h='448px' bgImage={`url(${style}.jpg)`} p='16'>
          { style === 'fromTheDeskOf' &&
            <Text as='h2' fontFamily='Hoefler'>From the Desk Of</Text>
          }
          <Text as='h1' className={style} fontFamily={font?.type} letterSpacing={`${font?.kerning/16}px`} color={color[1]}>{cardCopy}</Text>
        </Flex>
      </Flex>
      
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Card Settings</DrawerHeader>
          <Container>
            <Text>Card Style:</Text>

            <Stack spacing='4'>
              <Select value={style} onChange={(event) => setStyle(event.target.value)} placeholder="Select Style">
                <option value="theWisdom">The Wisdom</option>
                <option value="theBri">The Bri</option>
                <option value="theAudra">The Audra</option>
                <option value="theHenry">The Henry</option>
                <option value="theSofia">The Sofia</option>
                <option value="thePalermo">The Palermo</option>
                <option value="theDylan">The Dylan</option>
                <option value="theTalley">The Talley</option>
              </Select>
              { style &&
                <Select value={fontId} onChange={(event) => setFontId(event.target.value)} > 
                  {data[style].nodes.map(node => {
                    return (
                      <option key={node.id} value={node.id}>
                        {node.type} 
                        {node.kerning && ` - ${node.kerning}`}
                      </option>
                    )
                  })}
                </Select>
              }
            </Stack>
            <Text>Card Text:</Text>
            <Input value={cardCopy} placeholder="Card Text" size="lg" onChange={(event) => setCardCopy(event.target.value)} />
            <Text>Select Ink Color:</Text>
            <Popover
              isLazy
              variant="picker"
              placement="top-end"
            >
              <PopoverTrigger>
                <Button
                  aria-label={color}
                  background={color[1]}
                  height="50px"
                  width="50px"
                  padding={0}
                  minWidth="unset"
                  borderRadius={50}
                />
              </PopoverTrigger>
              <PopoverContent width="320px">
                <PopoverArrow bg={color[1]} />
                <PopoverCloseButton color="white" />
                <PopoverHeader
                  height="100px"
                  backgroundColor={color[1]}
                  borderTopLeftRadius={5}
                  borderTopRightRadius={5}
                  color="white"
                >
                  <Center height="100%">
                    <Text color={color[2]}>
                      {color[0]}
                    </Text>
                  </Center>
                </PopoverHeader>
                <PopoverBody>
                  <SimpleGrid columns={5} spacing={2}>
                    {colors.map((c, index) => (
                      <Button
                        key={c[1]}
                        aria-label={c[1]}
                        background={c[1]}
                        height="50px"
                        width="50px"
                        padding={0}
                        borderRadius={50}
                        _hover={{ background: c[1] }}
                        onClick={() => {
                          setColorIndex(index);
                        }}
                      />
                    ))}
                  </SimpleGrid>

                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Container>
          <DrawerBody />
        </DrawerContent>
      </Drawer>
    </Container>
    </Box>
  );
};

export default IndexPage;
