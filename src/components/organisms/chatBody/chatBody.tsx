import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonAtom, Message } from '../../atoms';
import {Text,Box, Flex} from "@chakra-ui/react";
const ChatBody = ({messages ,lastMessageRef}:{messages:any[],lastMessageRef:any}) => {
  const navigate = useNavigate();
   console.log(messages)

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <Flex w={"100%"} background="buttonface" height={"10vh"} alignItems={"center"}  justifyContent={"space-between"} padding={"1.25rem"}>
        <Text as="p" fontSize={"1.25rem"}>Colleagues</Text>
        <ButtonAtom type='Secondary' onClick={handleLeaveChat}>
          LEAVE CHAT
        </ButtonAtom>
      </Flex>
      <Box w={"100%"} height={"80vh"} background={"#fff"} padding={"1.25rem"} overflowY={"scroll"}>
        {messages?.map((message) =>
          message?.name === localStorage.getItem('userName') ? (
            <Box key={message?.id}>
              <Text as="p" textAlign={"right"}>You</Text>
              <Message type="sender">
                <Text fontSize={"0.875rem"} as="p">{message?.text}</Text>
              </Message>
            </Box>
          ) : (
            <Box key={message?.id}>
              <Text as="p">{message?.name}</Text>
              <Message type="recieptent">
                <Text as="p">{message?.text}</Text>
              </Message>
            </Box>
          )
        )}
        <Box  ref={lastMessageRef}></Box>
      </Box>
     
    </>
  );
};

export default ChatBody;