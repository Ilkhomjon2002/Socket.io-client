import "./App.css";
import * as socketIO from "socket.io-client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import ChatPage from "./components/pages/chatpage";
import Loading from "./components/pages/loading";
import { useEffect } from "react";
const socket = socketIO.connect("http://localhost:5000");

function App() {
	useEffect(() => {
		alert(
			"For seeing all features of this application please clone socket-io client and socket-io server repositories from my git thank you"
		);
	});

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
