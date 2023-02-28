import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { ButtonAtom, InputAtom } from '../atoms';
import {Flex, Text,Box} from "@chakra-ui/react";

const Home = ({socket}: {socket:any}) => {
    const navigate=useNavigate()
    const [userName,setUserName]=useState<string>("")
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        socket.emit('newUser', { userName, socketID: socket.id });
        navigate('/loading');
      };
    const onInputChange=(e:React.SyntheticEvent) =>{
        setUserName((e.target as HTMLInputElement).value)
    }
      return (
        <Flex textAlign={"center"} flexDirection={"column"} width={"100%"} height={"100vh"} display="flex"justifyContent={"center"} alignItems={"center"}>
          <form  onSubmit={handleSubmit}>
          <Text pb={"0.625rem"}  as="h2">Sign in to Open Chat</Text>
        
       <Flex width={"100%"} gap={"1rem"} alignItems={"center"}>
       <InputAtom 
      boxShadow={"0 4px 4px 0 rgba(0,0,0,0.25)"}
       placeholder='Username'
          inputType='input'
            type="text"
            minLength={6}
            name="username"
            id="username"
            value={userName}
            onChange={onInputChange}
          />
          <ButtonAtom onClick={handleSubmit} type='Primary'>SIGN IN</ButtonAtom>
       </Flex>
        </form>
        </Flex>
      );
}

export default Home
