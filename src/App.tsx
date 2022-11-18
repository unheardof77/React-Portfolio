import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import Projects from "./Pages/Projects/Projects";

import Home from "./Pages/Home/Home";
import {useState} from 'react';

function App() {
  const [pageState, setPage] = useState('Home');
  
  return (
      <>
        <Header setPage={setPage}/>
        {pageState === 'Home'?<Home/>:<Projects/>}
        <Footer/>
      </>
  );
}

export default App;
