import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import Projects from "./Pages/Projects/Projects";

import Home from "./Pages/Home/Home";
import {useState} from 'react';

function App() {
  const [pageState, setPage] = useState('Home');
  
  return (
      <section className="min-h-[100vh] relative">
        <Header setPage={setPage}/>
        {pageState === 'Home'?<Home/>:<Projects/>}
        <Footer/>
      </section>
  );
}

export default App;
