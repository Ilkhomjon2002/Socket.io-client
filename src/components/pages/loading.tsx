import {useEffect} from "react"
import {Box} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
import {ReactComponent as Loader} from "../../assets/loading.svg"
const Loading = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            navigate("/chat")
        }, 3000);

    },[])
  return (
    <Box backgroundColor={"teal"} width={"100%"} h={"100%"} position={"fixed"} display="flex" justifyContent={"center"} alignItems={"center"}>
      <Loader color="red"></Loader>
    </Box>
  )
}

export default Loading
