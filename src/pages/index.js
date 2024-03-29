/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from 'gatsby';

import '../css/type.css';

import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
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
    envelopeColors: allGoogleSpreadsheetEnvelopeColors {
      nodes {
        accent
        hex
        id
        name
      }
    }
    textColors: allGoogleSpreadsheetTextColors {
      nodes {
        accent
        hex
        id
        name
      }
    }
  }
`;

const styles = [
  'theHenry',
  'theSofia',
  'thePalermo',
  'theDylan',
  'theTalley',
  'fromTheDeskOf',
];

// markup
const IndexPage = ({ data }) => {
  const [style, setStyle] = useState('theJordan');
  const colors = data.textColors.nodes.map((node) => [node.name, node.hex, node.accent]);
  // eslint-disable-next-line max-len
  const envelopeColors = data.envelopeColors.nodes.map((node) => [node.name, node.hex, node.accent]);
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex];
  const [envelopColorIndex, setEnvelopeColorIndex] = useState(0);
  const envelopeColor = envelopeColors[envelopColorIndex];
  const [fontId, setFontId] = useState('c30b0034-34db-56e7-8012-213832df2366');
  const font = data[style]?.nodes.find((node) => node.id === fontId);
  const [cardCopy, setCardCopy] = useState('Jordan');
  const [jordanCopy, setJordanCopy] = useState('AUBREE');
  const [envCopy, setEnvCopy] = useState('616 YESTERDAY AVENUE | BEACON, NY 12508');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (

    <Box bg="#e9e9e9" height="100vh" display="inline-flex" w="100%" alignItems="center" justifyContent="center">
      <Flex paddingTop="50" alignItems="center" justifyContent="center" flexWrap="wrap" overflowX="hidden" flexDirection="column" w="100%" maxWidth="583px">
        <title>Alissa Bell</title>
        <Button fontFamily="Montserrat" fontSize="11" fontWeight="bolder" marginBottom="16px" w={['80%', '100%', '100%', '100%']} borderRadius="0" ref={btnRef} backgroundColor="#C67527" color="#ffffff" _hover={{ background: '#a8561c' }} onClick={onOpen}>
          Customize Your Stationery
        </Button>

        <Flex className={`cardParent ${style} `} w={['100%', 'auto', 'auto', 'auto']} alignItems="center" justifyContent="center" flexWrap="wrap">
          <Flex className="envelopeBG" bgColor={envelopeColor[1]}>
            <Flex className="envelopeMask" color="#fff" backgroundSize="100%" w={['410px', '500px', '583px', '583px']} h={['310px', '377px', '435px', '435px']} position="relative" justifyContent="center">
              <Text as="h1" fontFamily="Proxima" letterSpacing="3.125px" whiteSpace="pre-wrap" textAlign="center" fontSize="12" fontFamily={font?.type} letterSpacing={`${font?.kerning / 16}px`} color={color[1]} textShadow="0px 1px 1px rgb(255 255 255 / 54%), 0px -0.5px 0px rgb(0 0 0 / 38%)">{envCopy}</Text>
            </Flex>
          </Flex>
          <Flex className="card " flexWrap="wrap" w={['500px', '500px', '583px', '583px']} h={['327px', '377px', '435px', '435px']} position="relative" left="5px" bgImage={`url(${style}.jpg)`} backgroundSize="100%" p={['10', '10', '16', '16']}>
            { style === 'fromTheDeskOf'
              && (
              <>
                <Text as="h2" color={color[1]} fontFamily={font?.topType} className={font?.topType} fontSize="14px">From the Desk Of</Text>
              </>
              )}
            <Text as={style === 'theJordan' ? 'h2' : 'h1'} fontSize="16" textShadow="0px 1px 1px rgb(255 255 255 / 94%), 0px -0.5px 0px rgb(0 0 0 / 38%)" className={style} fontFamily={style === 'theJordan' ? font?.topType : font?.type} letterSpacing={`${font?.kerning / 16}px`} color={color[1]}>{cardCopy}</Text>
            { style === 'theJordan'
              && <Text as="h1" borderBottom="1px solid" color={color[1]} fontFamily={font?.type}>{jordanCopy}</Text>}

          </Flex>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size="sm"
          scrollBehavior="inside"
          blockScrollOnMount={false}
        >

          <DrawerContent fontFamily="Montserrat" overflow="auto">

            <DrawerCloseButton />

            <DrawerHeader fontFamily="Cormorant Garamond" fontSize="1.6rem">
              <Text fontFamily="Montserrat" fontSize="1rem" fontWeight="lighter" marginBottom="15px">Use our editor to select your design, font, color and message.  After adding to cart &amp; purchasing, we will email a digital proof with your selections.</Text>
              Envelope Selections
            </DrawerHeader>
            <Container>
              <Text>Envelope Text:</Text>
              <Textarea spacing="4" whiteSpace="pre-wrap" value={envCopy} placeholder="Envelope Text" size="lg" onChange={(event) => setEnvCopy(event.target.value)} />

              { !styles.includes(style)
                && (
                <>
                  <Text marginTop="16px" spacing="4">Select Envelope Color:</Text>
                  <Popover
                    isLazy
                    variant="picker"
                    placement="top-end"
                    spacing="4"
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
                )}
            </Container>
            <DrawerHeader fontFamily="Cormorant Garamond" fontSize="1.6rem">Card Selections</DrawerHeader>
            <Container>

              <Stack spacing="4">
                <Text a>Card Style:</Text>
                <Select value={style} onChange={(event) => setStyle(event.target.value)} placeholder="Select Style">
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
                { style

                  && (
                  <Select spacing="4" value={fontId} placeholder="Select Font Family" onChange={(event) => setFontId(event.target.value)}>
                    {data[style].nodes.map((node) => (
                      <option key={node.id} value={node.id}>
                        {/* {node.topType ? `${node.topType} & ${node.type} ` : node.type} */}
                        {node.topLabel && `${node.topLabel}` }
                        {node.kerning && ` - ${node.kerning}`}
                      </option>
                    ))}
                  </Select>
                  )}
              </Stack>
              <Text marginTop="16px">{style === 'theJordan' ? 'Top Text:' : 'Card Text'}</Text>
              <Input spacing="4" value={cardCopy} placeholder="Top Text" size="lg" onChange={(event) => setCardCopy(event.target.value)} />

              {style === 'theJordan'
                && (
                <>
                  <Text as="p" marginTop="16px">Bottom Text:</Text>
                  <Input spacing="4" value={jordanCopy} placeholder="Top Text" size="lg" onChange={(event) => setJordanCopy(event.target.value)} />
                </>
                )}
              <Text marginTop="16px">Select Ink Color:</Text>
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
      </Flex>
    </Box>
  );
};

export default IndexPage;
