import { Box,Text } from '@chakra-ui/react';
import {useState,useEffect} from 'react';

const Sidebar = ({socket}:{socket:any}) => {
    const [users,setUsers]=useState<any[]>([])
    useEffect(() => {
        socket.on('newUserResponse', (data:any) => setUsers(data));
      }, [socket, users]);
  return (
    <Box h={"100%"} background={"teal"} flex={"0.2"} padding={"1.25rem"} color={"#fff"}>
      <Text as={"h2"}>Open Chat</Text>
      <Box>
        <Text as={"h4"} padding={"1.875rem 0 1.25rem 0 "}>ACTIVE USERS</Text>
        <Box pb={"0.625rem"} color={"#607eaa"} fontSize={"0.875rem"}>
          {users.map((user) => (
            <Text color={"#fff"} as={"p"} key={user.socketID}>{user.userName}</Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

