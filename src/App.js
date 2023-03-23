import logo from './logo.svg';
import './App.css';
import Header from "./components/partials/Header"
import Nav from "./components/Nav"
import Content from "./components/Content"
import Footer from "./components/partials/Footer"
import bootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  return (
    <div className="App">
      <div className="grid">
      <Header />
      <Nav />
      <Content />
      </div>
      <Footer />
    </div>
  );
} 

export default App;
