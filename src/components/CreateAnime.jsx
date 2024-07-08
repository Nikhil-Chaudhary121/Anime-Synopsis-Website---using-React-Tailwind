import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import { useRecoilValue } from "recoil";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import usePreviewImg from "../hooks/usePreviewImg";

const MAX_CHAR = 500;

const CreateAnime = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [posts, setPosts] = useRecoilState(postsAtom);
  const [postText, setPostText] = useState("");
  const [remainingChar, setRemainingChar] = useState(MAX_CHAR);
  //   const { handleImgChange, imgUrl, setImgUrl } = usePreviewImg();
  const user = useRecoilValue(userAtom);
  const showToast = useShowToast();
  //   const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { handleImgChange, imgUrl, setImgUrl } = usePreviewImg();
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const handleCreate = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/anime/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postedBy: user._id,
          img: imgUrl,
          text: postText,
        }),
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      showToast("Success", "Post Created Successfully", "success");
      if (username === user.username) {
        // setPosts([data, ...posts]);
        setPostText("");
        setRemainingChar(500);
      }
      onClose();
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="">
      {" "}
      <Button
        pos={"fixed"}
        bg={"gray"}
        bottom={10}
        right={5}
        size={{ base: "sm", sm: "md" }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <AddIcon />
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl className="">
              <FormLabel className=" ">Anime Name</FormLabel>
              <Input className="mb-2" placeholder="Anime Name" />
              {/* </FormControl> */}
              <Textarea
                className="mb-2"
                value={postText}
                placeholder=" content goes here..."
              />
              <Text
                fontSize={"xs"}
                fontWeight={"bold"}
                textAlign={"right"}
                m={"1"}
                color={"gray.800"}
              >
                {remainingChar}/{MAX_CHAR}
              </Text>
              {/* <FormControl mt={4}> */}
              <FormLabel>Color</FormLabel>
              <Input placeholder="Color" />
              <Input
                type="file"
                ref={imageRef}
                onChange={handleImgChange}
                hidden
              />

              <BsFillImageFill
                size={16}
                className=" mt-4"
                style={{ marginLeft: "5px", cursor: "pointer" }}
                onClick={() => imageRef.current.click()}
              />
              <Input
                type="file"
                ref={imageRef2}
                onChange={handleImgChange}
                hidden
              />

              <BsFillImageFill
                size={16}
                className=" mt-4"
                style={{ marginLeft: "5px", cursor: "pointer" }}
                onClick={() => imageRef2.current.click()}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default CreateAnime;
