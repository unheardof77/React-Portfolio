import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import Projects from "./Pages/Projects/Projects";

import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <section className="min-h-[100vh] relative">
        <Header/>
        <Routes>
          <Route path="/react-portfolio" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
      </section>
    </Router>
  );
};

export default App;
