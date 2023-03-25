import logo from './logo.svg';
import './App.css';
import Header from "./components/partials/Header"
import Nav from "./components/Nav"
import Content from "./components/Content"
import Footer from "./components/partials/Footer"
import Messages from "./components/Messages/Messages"
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
            <Route path='/' element={ <Content posts={props.appState.postsPage.postListarray}/>}/>
            <Route path='/messages' element={<Messages messages={props.appState.messagesPage.listOfMessages} chats={props.appState.messagesPage.listOfChats}/>}>
              <Route path='/messages/:id' element={<Messages />} />
            </Route>
            <Route path='/savedimages' element={<Messages />} />
            <Route path='/settings' element={<Messages />} />
            <Route path='/governmentsecrets' element={<Messages />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
