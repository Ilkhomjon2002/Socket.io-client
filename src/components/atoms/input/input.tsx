import { inputProps } from "./inputTypes"
import { Input,Box,Text } from '@chakra-ui/react'
import {useRef} from "react"
const InputAtom = ({onChange,name,id,value, minLength, inputType,button, placeholder,...rest}:inputProps) => {
    const input=useRef<HTMLInputElement |null>(null)
    const focusInput=()=>{
       (input.current as HTMLInputElement).focus()

    }
  return (
  <>{inputType=="input"? 
    <Input  pl={"0.625rem"} placeholder={placeholder} borderRadius={"0.5rem"} {...rest} minLength={minLength} onChange={onChange} name={name} border={"1px solid teal"} outline={"none"} id={id} value={value} width={"100%"} fontSize={"1.25rem"} py={"0.625rem"}>
    </Input>:
    <Box position={"relative"} onClick={()=>focusInput()} width={"100%"} display="flex" gap={"1rem"} background="#fff" border={"1px solid teal"} padding={"0.625rem"} borderRadius={"0.625rem"} alignItems="center">
        <Text position={"absolute"} fontSize={"0.75rem"} top={"0"}  as="span">Someone is typing...</Text>
        <Input value={value} onChange={onChange} placeholder={placeholder} ref={input} w={"100%"} h="100%" border={"none"} outline="none" fontSize={"1.25rem"}></Input>
        {button}
    </Box>
    }</>
  )
}

export  {InputAtom}
