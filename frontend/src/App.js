import "./App.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Chatpage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
