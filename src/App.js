import './App.css';
import Header from "./components/partials/Header"
import Nav from "./components/Nav"
import Users from "./components/Users/Users"
import Content from "./components/Content"
import Footer from "./components/partials/Footer"
import Messages from "./components/Messages/Messages"
import bootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <div className="grid">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/messages' element={<Messages />}>
            <Route path='/messages/:id' element={<Messages />} />
          </Route>
          <Route path='/users' element={<Users />}>
            <Route path='/users/:id' element={<Messages />} />
          </Route>
          <Route path='/settings' element={<Messages />} />
          <Route path='/governmentsecrets' element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
