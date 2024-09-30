import  Menu from "./components/menu/Menu";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Main from "./Main";

function App() {
  return (
    <div className="container">
      <Menu/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
