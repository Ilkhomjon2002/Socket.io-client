import { Button, ButtonGroup } from '@chakra-ui/react'
import { buttonProps } from './buttonTypes'

const ButtonAtom = ({onClick, type,children , ...rest}:buttonProps) => {
  return (
    <>
    {type=="Primary"?  <Button  {...rest} cursor={"pointer"} boxShadow={"0 4px 4px 0 rgba(0,0,0,0.25)"} _active={{transform: "scale(0.9)"}} _hover={{backgroundColor:"teal", color:"#fff"}} transition={".2s ease-in-out"} px={"1.25rem"} color={"teal"} borderRadius={"0.5rem"}  border={"1px solid transparent"} py={"0.625rem"} fontSize="1.25rem" onClick={onClick}>
        {children}
    </Button>:
    <Button 
    {...rest}
    cursor={"pointer"} boxShadow={"0 4px 4px 0 rgba(0,0,0,0.25)"}
     _active={{transform: "scale(0.9)"}} _hover={{backgroundColor:"#fff", color:"orange"}} 
     transition={".2s ease-in-out"} px={"1.25rem"} backgroundColor={"orange"} color={"#fff"}
    borderRadius={"0.5rem"}  border={"1px solid transparent"} py={"0.625rem"} fontSize="1.25rem" onClick={onClick}>
         {children}
    </Button>}
    
    </>
  
  )
}

export {ButtonAtom}
