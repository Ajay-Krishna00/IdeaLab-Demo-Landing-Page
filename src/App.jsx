import React, { useEffect } from "react";
import "./index.css";
import {
  Box,
  Button,
  ChakraProvider,
  Img,
  Modal,
  Text,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormLabel,
  FormControl,
  Card,
  CardBody,
} from "@chakra-ui/react";
import bulb from "../public/bulb.png";
import car from "../public/car.png";
import cnclathe from "../public/cnc-lathe.png";
import idealab from "../public/idealab.jpg";
import logo0 from "../public/logo0.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const se = document.querySelectorAll(".scroll");
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    se.forEach((el) => {
      ob.observe(el);
    });
    return () => {
      se.forEach((el) => ob.unobserve(el)); // Clean up ob on unmount
    };
  }, []);

  return (
    <ChakraProvider>
      <Box
        p={{ sm: 4, base: 2 }}
        bg="white"
        color="gray.800"
        width={"100vw"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        zIndex={1000}
        boxShadow="md"
        overflow={"hidden"}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Box className="bulbContainer" ml={{ md: "70px", base: "2px" }}>
            <div class="bulb"></div>
            <Img
              className="bulbImage"
              src={bulb}
              boxSize={{ sm: "60px", base: "45px" }}
            />
          </Box>
          <Text
            as={"kbd"}
            ml={{ md: "10px", base: "1px" }}
            fontSize={{ md: "5xl", base: "xl" }}
            fontWeight={"800"}
          >
            IdeaLab
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ md: 10, base: 2 }}
        >
          <a href="#home">
            <Text fontSize={{ md: "xl", base: "sm" }} fontWeight={"600"}>
              Home
            </Text>
          </a>
          <a href="#about">
            <Text fontSize={{ md: "xl", base: "sm" }} fontWeight={"600"}>
              About
            </Text>
          </a>
          <a href="#contact">
            <Text fontSize={{ md: "xl", base: "sm" }} fontWeight={"600"}>
              Contact
            </Text>
          </a>
          <Button
            colorScheme="teal"
            variant="outline"
            p={{ md: "auto", base: 1 }}
          >
            <Text
              fontSize={{ md: "xl", base: "sm" }}
              fontWeight={"600"}
              onClick={onOpen}
            >
              Book session
            </Text>
          </Button>
        </Box>
      </Box>
      <Box bg={"white"}>
        <Box
          id="home"
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          height={"85vh"}
        >
          <Img src={car} w={"700px"} className="scroll" />
          <Box
            className="scroll"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={{ md: "5xl", base: "3xl" }} fontWeight={"800"}>
              Welcome to IdeaLab
            </Text>
            <Text
              fontSize={{ md: "2xl", base: "xl" }}
              fontWeight={"600"}
              p={"2"}
            >
              Where Ideas Take Flight – The IdeaLab at Model Engineering College
            </Text>
          </Box>
        </Box>
        <Box
          id="about"
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          height={"85vh"}
        >
          <Img src={cnclathe} w={"600px"} className="scroll" />
          <Box
            className="scroll"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={{ md: "3xl", base: "xl" }} fontWeight={"700"}>
              About Cognicor AICTE IDEALab
            </Text>
            <Text
              fontSize={{ md: "xl", base: "md" }}
              fontWeight={"600"}
              textAlign={"justify"}
              p={4}
              w={{ md: "600px", sm: "450px", base: "360px" }}
            >
              The AICTE in collaboration with COGNICOR established MEC IDEALab
              in 2022. It offers interactive learning workshops and training
              programmes with the goal of fostering creativity and promoting
              interest in applications of STEM, multidisciplinary education, and
              collaboration. It will enable faculty and students alike to
              "Engage, Explore, Experience, Express and Excel" by providing all
              the facilities required to turn an idea into a prototype and learn
              technical craft. It stands to assist in the development of
              commercially viable products, meet socioeconomic needs, and
              encourage entrepreneurship in the nearby student community.
            </Text>
          </Box>
        </Box>
        <Box
          id="contact"
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ sm: "55vh", base: "85vh" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              className="scroll"
              mb={"50px"}
              fontSize={{ md: "3xl", base: "xl" }}
              fontWeight={"700"}
            >
              Point of contact
            </Text>
            <Box
              className="scroll"
              display={"flex"}
              flexDirection={{ md: "row", base: "column" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={10}
            >
              <Card bg={"gray.100"} p={4} w={"400px"}>
                <CardBody>
                  <Text fontSize="2xl" fontWeight={"600"}>
                    Dr. Mini
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Principal
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Model Engineering College
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Email: principal@mec.ac.in
                  </Text>
                </CardBody>
              </Card>
              <Card bg={"gray.100"} p={4} w={"400px"}>
                <CardBody>
                  <Text fontSize="2xl" fontWeight={"600"}>
                    Binesh T
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Faculty incharge
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Model Engineering College
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Email: binesht@mec.ac.in
                  </Text>
                </CardBody>
              </Card>
              <Card bg={"gray.100"} p={4} w={"400px"}>
                <CardBody>
                  <Text fontSize="2xl" fontWeight={"600"}>
                    Vishnu C Rajeev
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Student Co-ordinator
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Model Engineering College
                  </Text>
                  <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                    Email: vishnucrajeev.mec@gmail.com
                  </Text>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg="blue.700"
        color="white"
        h={{ md: "45vh", sm: "55vh", base: "80vh" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={0}
        boxShadow="md"
        flexDirection={"column"}
      >
        <Box
          width={"100vw"}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
        >
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
              p={4}
            >
              <Img src={logo0} w={"160px"} />
              <Img src={idealab} w={"160px"} />
            </Box>
            <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
              Managed by Institute of Human Resource Development
            </Text>
          </Box>
          <Box
            pr={{ base: 0, md: "200px" }}
            mt={{ base: "50px", md: 0 }}
            mb={{ base: "50px", md: 0 }}
          >
            <Text mb={"24px"} fontSize="2xl" fontWeight={"600"}>
              Connect with us
            </Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
            >
              <a href="https://twitter.com/idealab_mec" target="_blank">
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/cognicor-aicte-idealab/about/"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
            </Box>
          </Box>
          <Box pr={8} mb={{ md: "0px", base: "15px" }}>
            <Text
              mb={{ md: "24px", base: "10px" }}
              fontSize="2xl"
              fontWeight={"600"}
            >
              Contact us
            </Text>
            <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
              Model Engineering College
            </Text>
            <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
              Thrikkakara, Kochi
            </Text>
            <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
              Kerala, PIN: 682021
            </Text>
            <a href="mailto:idealab@mec.ac.in">
              <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
                Email: idealab@mec.ac.in
              </Text>
            </a>
            <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"500"}>
              Phone: 9605169646
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bottom={0}
        >
          <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"600"}>
            © 2025 IdeaLab. All rights reserved.
          </Text>
        </Box>
      </Box>
      <BookModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default App;

function BookModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={{ md: "3xl", base: "xl" }} fontWeight={"600"}>
            Book a session
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={{ md: "xl", base: "md" }} fontWeight={"600"}>
            Please fill the form below to book a session
          </Text>

          <Box display={"flex"} flexDirection={"column"} gap={4} p={4}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Description" />
            <FormControl>
              <FormLabel>Choose a date</FormLabel>
              <Input placeholder="Date" type="date" />
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="space-between">
          <Button colorScheme="teal" variant="outline">
            Submit
          </Button>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
