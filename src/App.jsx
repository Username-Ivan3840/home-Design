import  Menu from "./components/menu/Menu";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
