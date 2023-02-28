import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FooterForm } from '../../organisms';

const ChatFooter = ({socket}:{socket:any}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e:React.SyntheticEvent) => {
    console.log(message)
    const user=localStorage.getItem("userName")
    e.preventDefault();
    if (message.trim() && user) {
      socket.emit('message', {
        text: message,
        name: user,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
   
    <Box  padding={"0.625rem"} backgroundColor={"buttonFace"}>
      <FooterForm onSubmit={handleSendMessage } message={message} setMessage={setMessage}></FooterForm>
    </Box>
  );
};

export default ChatFooter;