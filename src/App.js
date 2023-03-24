import logo from './logo.svg';
import './App.css';
import Header from "./components/partials/Header"
import Nav from "./components/Nav"
import Content from "./components/Content"
import Footer from "./components/partials/Footer"
import Messages from "./components/Messages"
import bootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid">
          <Header />
          <Nav />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/messages' element={<Messages />} />
          </Routes>
        </div>
        <Footer />
      </div>  
    </BrowserRouter>
  );
}

export default App;
