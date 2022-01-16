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
  Textarea,
  StylesProvider,
} from '@chakra-ui/react';

export const pageQuery = graphql`
  query MyQuery {
    theJordan: allGoogleSpreadsheetJordan {
      nodes {
        topType
        type
        kerning
        id
        topLabel
      }
    }
    theWisdom: allGoogleSpreadsheetWisdom {
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theBri: allGoogleSpreadsheetTheBri {
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theAudra: allGoogleSpreadsheetTheAudra{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theHenry: allGoogleSpreadsheetTheHenry{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theSofia: allGoogleSpreadsheetTheSofia{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    thePalermo: allGoogleSpreadsheetThePalermo{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theDylan: allGoogleSpreadsheetTheDylan{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    theTalley: allGoogleSpreadsheetTheTalley{
      nodes {
        type
        kerning
        id
        topLabel
      }
    }
    fromTheDeskOf: allGoogleSpreadsheetFromTheDesk{
      nodes {
        type
        topType
        kerning
        kerningTwo
        id
        topLabel
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
const envelopeColors = [
  ['Vinho Verde', '#9d8403', '#fff'],
  ['Tumeric', '#da9b1a', '#fff'],
  ['Sky', '#c9d5d5', '#fff'],
  ['Saddle', '#413328', '#fff'],
  ['Paprika', '#dc6f52', '#fff'],
  ['Nude', '#f6e6d6', '#fffbd3'],
  ['Lilac', '#cfbcd0', '#fff'],
  ['Emerald','#37443d', '#fff'],
  ['Disco', '#d3d7d8', '#fff'],
  ['Charcoal', '#2d2b2e', '#fff'],
  ['Calla Lily', '#e7e7e7', '#fff'],
  ['California Poppy', '#d78023', '#fff'],
  ['Barragan Pink', '#d53863', '#fff'],
]

const styles = [
  'theHenry',
  'theSofia',
  'thePalermo',
  'theDylan',
  'theTalley',
  'fromTheDeskOf'
]
const mySpecialWindowFunction = () => {
    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
};
// markup
const IndexPage = ({data}) => {
  const [style, setStyle] = useState('theWisdom');
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex];
  const [envelopColorIndex, setEnvelopeColorIndex] = useState(0);
  const envelopeColor = envelopeColors[envelopColorIndex];
  const [fontId, setFontId]  = useState('c30b0034-34db-56e7-8012-213832df2366');
  const font = data[style]?.nodes.find(node => node.id === fontId);
  const [cardCopy, setCardCopy] = useState('YOUR COPY HERE');
  const [jordanCopy, setJordanCopy] = useState('BOTTOM COPY HERE');
  const [envCopy, setEnvCopy] = useState('ENVELOPE COPY HERE');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return ( 
    
    <Box bg='#e9e9e9' height='100vh'>
      <Container  paddingTop="50"  >
      <title>Alissa Bell</title>
      <Button marginBottom='16px' ref={btnRef} colorScheme="orange" onClick={onOpen}>
        Customize Your Card
      </Button>
      
      <Flex className={`cardParent ${style}`} flexWrap='wrap'>
        <Flex className={`envelopeBG`}   bgColor={envelopeColor[1]} w="100%" maxWidth='583px' h={['267px','365px','335px','335px']}>
          <Flex className={`envelopeMask`}    color='#fff'  backgroundSize='100%' w='583px' position='relative'  justifyContent='center' >
            <Text as='h1' fontFamily='Proxima' letterSpacing='3.125px' whiteSpace='pre-wrap' textAlign='center' fontSize='12' fontFamily={font?.type} letterSpacing={`${font?.kerning/16}px`} color={color[1]} textShadow='0px 1px 1px rgb(255 255 255 / 54%), 0px -0.5px 0px rgb(0 0 0 / 38%)'  >{envCopy}</Text>
          </Flex>
        </Flex>
        <Flex className={`card `} flexWrap='wrap' w='100%' maxWidth='583px' h={['267px','365px','365px','365px']} position='relative' left='5px' bgImage={`url(${style}.jpg)`} backgroundSize='100%' p={['10','10','16','16']}>
          { style === 'fromTheDeskOf' &&
            <>
              <Text as='h2' fontFamily={font?.topType} fontSize='14px'>From the Desk Of</Text>
            </>
          }
          <Text as={style === 'theJordan' ? 'h2' : 'h1'} fontSize='16' textShadow='0px 1px 1px rgb(255 255 255 / 94%), 0px -0.5px 0px rgb(0 0 0 / 38%)' className={style} fontFamily={font?.type} letterSpacing={`${font?.kerning/16}px`} color={color[1]}>{cardCopy}</Text>
          { style === 'theJordan' &&
            <Text as='h1' borderBottom='1px solid' color={color[1]} fontFamily={font?.topType}>{jordanCopy}</Text>
          }
          
        </Flex>
      </Flex>
      
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent overflow='auto'>
          <DrawerCloseButton />
          <DrawerHeader>Envelope Settings</DrawerHeader>
          <Container>
            <Text>Envelope Text:</Text>
            <Textarea spacing='4' whiteSpace='pre-wrap' value={envCopy} placeholder="Envelope Text" size="lg" onChange={(event) => setEnvCopy(event.target.value)} />

            { !styles.includes(style) && 
              <>
                <Text marginTop='16px' spacing='4'>Select Envelope Color:</Text>
                <Popover
                  isLazy
                  variant="picker"
                  placement="top-end"
                  spacing='4'
                >
                  <PopoverTrigger>
                    <Button
                      aria-label={envelopeColor}
                      background={envelopeColor[1]}
                      height="50px"
                      width="50px"
                      padding={0}
                      minWidth="unset"
                      borderRadius={50}
                    />
                  </PopoverTrigger>
                  <PopoverContent width="320px">
                    <PopoverArrow bg={envelopeColor[1]} />
                    <PopoverCloseButton color="white" />
                    <PopoverHeader
                      height="100px"
                      backgroundColor={envelopeColor[1]}
                      borderTopLeftRadius={5}
                      borderTopRightRadius={5}
                      color="white"
                    >
                      <Center height="100%">
                        <Text color={envelopeColor[2]}>
                          {envelopeColor[0]}
                        </Text>
                      </Center>
                    </PopoverHeader>
                    <PopoverBody>
                      <SimpleGrid columns={5} spacing={2}>
                        {envelopeColors.map((col, index) => (
                          <Button
                            key={col[1]}
                            aria-label={col[1]}
                            background={col[1]}
                            height="50px"
                            width="50px"
                            padding={0}
                            borderRadius={50}
                            _hover={{ background: col[1] }}
                            onClick={() => {
                              setEnvelopeColorIndex(index);
                            }}
                          />
                        ))}
                      </SimpleGrid>

                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </>
            }
          </Container>
          <DrawerHeader>Card Settings</DrawerHeader>
          <Container>
            

            <Stack spacing='4'>
              <Text a>Card Style:</Text>
              <Select value={style} onChange={(event) => setStyle(event.target.value)} >
              <option value="theJordan">The Jordan</option>
                <option value="theWisdom">The Wisdom</option>
                <option value="theBri">The Bri</option>
                <option value="theAudra">The Audra</option>
                <option value="theHenry">The Henry</option>
                <option value="theSofia">The Sofia</option>
                <option value="thePalermo">The Palermo</option>
                <option value="theDylan">The Dylan</option>
                <option value="theTalley">The Talley</option>
                <option value="fromTheDeskOf">From The Desk</option>
              </Select>
              <Text>Font Family:</Text>
              { style &&
              
                <Select spacing='4' value={fontId} onChange={(event) => setFontId(event.target.value)} > 
                  {data[style].nodes.map(node => {
                    return (
                      <option key={node.id} value={node.id}>
                        {/* {node.topType ? `${node.topType} & ${node.type} ` : node.type} */}
                        {node.topLabel && `${node.topLabel}` }
                        {node.kerning && ` - ${node.kerning}`}
                      </option>
                    )
                  })}
                </Select>
              }
            </Stack>
            <Text marginTop='16px'>{style === 'theJordan' ? 'Top Text:' : 'Card Text'}</Text>
            <Input spacing='4' value={cardCopy} placeholder="Top Text" size="lg" onChange={(event) => setCardCopy(event.target.value)} />
            
            {style === 'theJordan' && 
              <>
                <Text as="p" marginTop='16px'>Bottom Text:</Text>
                <Input spacing='4' value={jordanCopy} placeholder="Top Text" size="lg" onChange={(event) => setJordanCopy(event.target.value)} />
              </>
            }
            <Text marginTop='16px'>Select Ink Color:</Text>
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
