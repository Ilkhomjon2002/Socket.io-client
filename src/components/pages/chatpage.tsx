import { Flex, Stack } from '@chakra-ui/react';
import {useEffect,useState,useRef} from 'react';
import ChatBody from '../organisms/chatBody/chatBody';
import ChatFooter from '../organisms/footer/footer';
import Sidebar from '../organisms/Sidebar/sidebar';

const ChatPage = ({ socket }:{socket:any}) => {
    const [messages,setMessages]=useState<any[]>([])
    const lastMessageRef = useRef<null| HTMLDivElement>(null);

    useEffect(()=>{
socket.on("messageResponse",(data:any)=>{setMessages([...messages,data])})
    },[socket,messages])
    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
  return (
    <Flex w={"100%"} h="100vh" display="flex" alignItems={"center"}>
      <Sidebar socket={socket}/>
      <Stack flex={"0.8"} height={"100%"}>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
        <ChatFooter socket={socket} />
      </Stack>
    </Flex>
  );
};

export default ChatPage;