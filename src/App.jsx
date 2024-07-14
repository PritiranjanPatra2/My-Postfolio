import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import * as ReactDOM from "react-dom";
function App(){
  return(
    <>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/certificates" element={<Certificate/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/resume" element={<Resume/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}
export default App;