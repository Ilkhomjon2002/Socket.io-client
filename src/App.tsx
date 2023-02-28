import './App.css';
import * as socketIO from 'socket.io-client';
import {Route, BrowserRouter,Routes} from "react-router-dom"
import Home from './components/pages/home';
import ChatPage from './components/pages/chatpage';
import Loading from './components/pages/loading';
const socket = socketIO.connect('http://localhost:5000');

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home socket={socket} />}></Route>
         <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
         <Route path="/loading" element={<Loading />}></Route>
       </Routes>
    </BrowserRouter>
 
  );
}

export default App;
