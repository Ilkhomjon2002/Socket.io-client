import { messageProps } from './messageTypes'
import { Box } from '@chakra-ui/react'
import dayjs from 'dayjs'
const Message = ({children,type}:messageProps) => {

  return (
    <Box position={"relative"} background={type=="sender"?"teal":"orange"} overflowWrap={"break-word"} fontSize={"1rem"} overflow={"hidden"} maxW={"18.75rem"} color={"#fff"} pb={"1.25rem"} pt={"0.625rem"} px={"0.625rem"} borderRadius={"0.625rem"} marginLeft={type=="sender"?"auto":""}>
      {children}
      <Box bottom={"0"} fontSize={"0.625rem"} right="2.5%" position={"absolute"}>
        {dayjs(new Date()).format("HH:MM (DD.MM)")}
      </Box>
    </Box>
  )
}

export {Message}

